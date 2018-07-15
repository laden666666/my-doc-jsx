/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'
const style = require('./Code.css')

var Prism = require('prismjs');

var languages = {
    javascript: Prism.languages.javascript,
    java: Prism.languages.java,
    markdown: Prism.languages.markdown,
    c: Prism.languages.c,
    cpp: Prism.languages.cpp,
    php: Prism.languages.php,
    basic: Prism.languages.basic,
    go: Prism.languages.go,
    groovy: Prism.languages.groovy,
    html: Prism.languages.html,
    css: Prism.languages.css,
    json: Prism.languages.json,
    less: Prism.languages.less,
    scss: Prism.languages.scss,
    'c#': Prism.languages.csharp,
    python: Prism.languages.python,
    ruby: Prism.languages.ruby,
    rust: Prism.languages.rust,
    scala: Prism.languages.scala,
    typescript: Prism.languages.typescript,
}

function mirror(code, lang) {
    return Prism.highlight(code, languages[lang])
};

export class Code extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    async render(render: HTMLRender){
        render.setStyle('code', style)
        var lang = this.props.lang || 'javascript';
        var code = mirror((this.childPseudoNodes[0] ? this.childPseudoNodes[0].getText() : '').trim(), lang)
        return `<figure class='mydoc_code'>
                    <pre class="mydoc_code_pre cm-s-eclipse">${code}</pre>
                </figure>`
    }
}

export default Code;