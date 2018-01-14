/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag';
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
    php: Prism.languages.groovy,
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

class Code extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    render(){
        var lang = this.content.props.lang || 'javascript';
        return `<figure class='mydoc_code'>
                    <pre class="mydoc_code_pre cm-s-eclipse">${mirror(this.content.props.children.replace(/^\s*/,'').replace(/\s*$/,''), lang)}</pre>
                </figure>`
    }
}

export default Code;