/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag';
var CodeMirror = require("codemirror/addon/runmode/runmode.node.js");
import codemirrorStyle from"codemirror/lib/codemirror.css";
import style from './Code.css';


function mirror(code, lang, mode) {
    var out = "";

    var lang = lang.toLowerCase(), modeName = lang;

    if (!mode) mode = lang;

    require("codemirror/mode/meta.js");

    CodeMirror.modeInfo.forEach(function(info) {
        if (info.mime == lang) {
            modeName = info.mode;
        } else if (info.name.toLowerCase() == lang) {
            modeName = info.mode;
            lang = info.mime;
        }
    });

    if (!CodeMirror.modes[modeName])
        require("codemirror/mode/" + modeName + "/" + modeName + ".js");

    function esc(str) {
        const map = {
            '<': '&lt;',
            '/': '&#47;',
            '&': '&amp;',
            '>': '&gt;',
        };
        return str.replace(/[<&\/>]/g, ch => map[ch]);
    }

    var curStyle = null, accum = "";
    function flush() {
        accum = esc(accum);
        if (curStyle) {
            out += "<span class=\"" + curStyle.replace(/(^|\s+)/g, "$1cm-") + "\">" + accum + "</span>";
        }
        else out += accum;
    }

    CodeMirror.runMode(code, mode, function(text, style) {
        if (style != curStyle) {
            flush();
            curStyle = style; accum = text;
        } else {
            accum += text;
        }
    });
    flush();

    return out;
};

class Code extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    render(){

        var lang = this.content.props.lang || 'javascript';

        return `<div class='myblog_code'>
                    <pre class="myblog_code_pre cm-s-default">
${mirror(this.content.props.children, lang)}
                    </pre>
                </div>`
    }
}

export default Code;