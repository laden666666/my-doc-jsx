<doc>
    <h1>my-doc-jsx——一个基于jsx的文档书写、文档转换工具</h1>

    <h2>富文本、office写文档的时代过去了</h2>
    <p>早期，大家都是使用富文本和office写博客，后来大家都改用了markdown，这是因为markdown是一个简单的标记语言。</p>
    <p>使用标记语言，可以让我们的文档（博客）的内容和样式分离，甚至让计算机读懂我们文档的结构，使其将我们的文档任意转换格式。同时使用可扩展的标记语言，能够使用我们自定义的方言，去书写一些格式非常复杂但是具有结构性的内容。 </p>
    <p>因此，在这个时代已经没有人在希望用富文本或者office去写文档，我们要标记语言。</p>

    <h2>markdown、xml？还是其他标记语言</h2>
    <p>那么应该选用哪种标记语言呢？</p>
    <p>
        <strong>xml：</strong>无疑是最优秀的标记语言，xml具有较高的可扩展性，定义规范。但是xml不适合书写文档，因为他过于<strong>规范</strong>，不够灵活，严格的语法要求使人生畏；而且他对于转义的处理过也不够方便，一个空格都需要六个字符表示（&nbsp;），也没几个人能够记住这些转义。离开编辑器我们也很难直接使用xml去书写复杂的格式文档。
    </p>
    <p>
        <strong>markdown：</strong>无疑是最流行的用于文档书写的标记语言，它非常的简单，而且就是为了书写文档而生的。但是它不同于xml，扩展性不够，我们可以通过“```”扩展markdown的语法，但是书写起来非常不方便，而且格式也很混乱。
        同时markdown方言太多，导致多种markdown编辑器编辑出的文档彼此居然不兼容。也许因为markdown的语法过于简单，因此用起来反而非常麻烦，相信很多让人都遇到过一个表格调整了半天显示还有问题的情况。这些问题都是因为markdown不具备xml的规范性导致的。
    </p>
    <p>
        <strong>html：</strong>本身就没有扩展性，同时也没有markdown方便，更不适合书写文档。包含了xml和markdown的全部缺点。
    </p>
    <p>
        <strong>jsx：</strong>对，你没看错，就是react提供的附属品——jsx。我们希望能够像写markdown一样方便，又希望像写xml一样规范并且有扩展性，而jsx不就是这样的一个标记语言吗？同时配合es6的<strong>模板字符串</strong>，可以完美地解决了转义问题。
        使用jsx，并且实现像markdown和xml那样包装html，能够使我们使用可扩展的标记语言书写文档，这就是<strong>my-doc-jsx</strong>。
    </p>

    <h1>my-doc-jsx</h1>
    <p><span>my-doc-jsx（以下简称docjsx）</span>是一个使用jsx书写文档的工具，并支持多种形式的文档转换。docjsx主要特点有：</p>
    <li>0.使用jsx语法编写文档</li>
    <li>1.较好的语义化文档编写格式</li>
    <li>2.支持将docjsx文档转换为html、markdown格式</li>
    <li>3.可以浏览器、nodejs、cli等多种平台上转换文档</li>
    <li>4.支持自定义插件，可以扩展标签</li>

    <h1>如何用docjsx书写文档</h1>
    <p>docjsx有着接近html的标签系统，每个段落都需要用标签标记起来，因此他不像markdown那样随意，格式上更加清晰整齐；同时他有着markdown一样的书写格式，他不像html那样层层嵌套，docjsx要求每个段落必须是并列关系，不能嵌套。</p>

    <h2>根标签</h2>
    <p>每一个docjsx必须使用doc标签定义。因为根标签的写法是固定的，所以docjsx可以省略根标签，不过省略了根标签就不符合jsx的书写规范，所以请酌情考虑。</p>
    <code lang="html">{
    `<doc>
    <h1>一级标题</h1>
    <h2>二级标签</h2>
</doc>`
    }</code>
    <p>可以简写为：</p>
    <code lang="html">{
        `<h1>一级标题</h1>
<h2>二级标签</h2>`
    }</code>

    <h2>块级标签</h2>
    <p>定义段落的标签我们称之为块级标签，参考html中的块级标签，块级标签不能嵌套，系统提供的块级标签有：</p>

    <h3>h1到h3</h3>
    <p>定义标题</p>
    <code lang="html">{
        `<h1>这是一个一级标题</h1>
<h2>这是一个二级标题</h2>
<h3>这是一个三级标题</h3>
<h3>这是一个四级标题</h3>`
    }</code>

    <h3>nav</h3>
    <p>定义菜单</p>
    <code lang="html">{
        `<nav/>`
    }</code>

    <h3>p</h3>
    <p>定义段落</p>
    <code lang="html">{
        `<p>这是一段话</p>`
    }</code>

    <h3>img</h3>
    <p>定义图片，使用src属性定义</p>
    <code lang="html">{
        `<img src="url" />`
    }</code>

    <h3>blockquote</h3>
    <p>定义引用，用于特殊说明解释</p>
    <code lang="html">{
        `<blockquote/>Here is a long quotation here is a long quotation here is a long quotation
here is a long quotation here is a long quotation here is a long quotation
here is a long quotation here is a long quotation here is a long quotation.</blockquote>`
    }</code>

    <h3>code</h3>
    <p>定义代码展示，使用lang字段指出展示源码的语言。展示源码时候，最好用es6的模板字符串。</p>
    <code lang="html">{
        `<code lang="javascript">{
\`function test(){
    console.log("hello world！")
}
test();\`
}</code>`
    }</code>
    <p>显示的效果为：</p>
    <code lang="javascript">{
        `function test(){
    console.log("hello world！")
}
test();`
    }</code>

    <h3>li</h3>
    <p>定义列表。</p>
    <code lang="html">{
        `<li>0.test1</li>
<li>1.test2</li>
<li>2.test3</li>
<li>3.test4</li>`
    }</code>

    <h3>table</h3>
    <p>定义表格，语法类似html的table，暂不支持合并单元格。</p>
    <code lang="html">{
`<table>
    <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
    </tr>
    <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
    </tr>
    <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
    </tr>
</table>`
    }</code>

    <h2>行内标签</h2>
    <p>定义段落中的词语的标签我们称之为行内标签，参考html中的行内标签，块级标签可以嵌套内标标签，但是行内标签不能嵌套块级标签，系统提供的块级标签有：</p>

    <h3>a</h3>
    <p>定义超链接，通过href定义超链接的地址</p>
    <code lang="html">{`<p>点击可跳转<a href="http://www.baidu.com">百度</a></p>`}</code>

    <h3>span</h3>
    <p>用于定义词语的标记，被标记的词语会高亮显示。</p>
    <code lang="html">{`<p>高亮显示<span>docjsx</span></p>`}</code>

    <h3>strong</h3>
    <p>用于定义粗体</p>
    <code lang="html">{`<p><strong>加粗</strong>显示</p>`}</code>

    <h1>格式转换</h1>
    <p>编写好的jsx格式的博客无法直接展示，需要将它们转为其他格式后才能展示出来。docjsx支持将jsx格式书写的文档转为html或者markdown格式，而且可以运行浏览器、nodejs、命令行等多种平台上面。</p>

    <h2>浏览器环境和nodejs环境转换</h2>
    <p>在浏览标或者nodejs环境下，都可以使用docjsx将jsx文件转为html页面或者md文件中。</p>
    <p>首先引入docjsx文件，如果是nodejs环境，执行：</p>
    <code>{
        `npm install my-doc-jsx`
    }</code>
    <p>在浏览器中，使用script标签和link引入dist目录中的myDocJsx.css和myDocJsx.js文件。</p>
    <code lang="javascript">{
        `var htmlDoc = myDocJsx.convert(jsxDoc)`
    }</code>
    <p>这样就将jsx文档转为html文档。</p>

    <h3>使用插件</h3>
    <p>如果需要使用插件，则需要将插件的js文件和css文件导入，使用<span>usePlugin</span>函数将插件注册到docjsx中：</p>
    <code lang="javascript">{
`const myDocJsx = require("my-jsx-doc")
const myDocJsxPluginAPI = require("my-jsx-doc-plugin-api")

//使用usePlugin函数将插件注册到docjsx
myDocJsx.usePlugin(myDocJsxPluginAPI)

//然后在执行转换
var htmlDoc = myDocJsx.convert(jsxDoc)`
    }</code>

    <h3>myDocJsx.convert函数</h3>
    <p>转换函数，将jsx字符串转换为指定的文档格式输出。</p>

    <h4>参数列表</h4>
    <table>
        <tr>
            <th>参数名</th>
            <th>参数类型</th>
            <th>说明</th>
        </tr>
        <tr>
            <td>jsxStr</td>
            <td>string</td>
            <td>jsx字符串</td>
        </tr>
        <tr>
            <td>option</td>
            <td>Object</td>
            <td>转换的配置。主要配置有：format，转换的格式配置，支持“HTML”和“MARKDOWN”两种</td>
        </tr>
    </table>

    <h4>返回值</h4>
    <table>
        <tr>
            <th>参数类型</th>
            <th>说明</th>
        </tr>
        <tr>
            <td>string</td>
            <td>转换好的指定格式的文档</td>
        </tr>
    </table>


    <h3>myDocJsx.usePlugin函数</h3>
    <p>使用usePlugin函数注册插件。</p>

    <h4>参数列表</h4>
    <table>
        <tr>
            <th>参数名</th>
            <th>参数类型</th>
            <th>说明</th>
        </tr>
        <tr>
            <td>plugin</td>
            <td>Plugin</td>
            <td>注册的插件</td>
        </tr>
    </table>

    <h2>cli命令行</h2>
    <p>docjsx提供了一套用于文档转换的命令行，与nodejs、浏览器环境不同，cli是直接对文件的格式做转换，而不是字符串转换。首先全局安装my-doc-jsx：</p>
    <code>{`npm install my-doc-jsx -g`}</code>
    <p>docjsx具体语法是:</p>
    <code>{`docjsx [options] [command]`}</code>

    <h3>convert命令</h3>
    <p>将jsx格式的文档转化为指定的格式。</p>
    <code>{`convert|c [options] <format> <file> <output>`}</code>
    <p>例如：</p>
    <code>{`docjsx c html ./doc-jsx/README.jsx ./`}</code>

    <h4>参数列表</h4>
    <table>
        <tr>
            <th>参数名</th>
            <th>说明</th>
        </tr>
        <tr>
            <td>format</td>
            <td>转化的格式，支持html和md两种格式</td>
        </tr>
        <tr>
            <td>file</td>
            <td>需要转换的文件</td>
        </tr>
        <tr>
            <td>output</td>
            <td>转换成功后文件保存的目录</td>
        </tr>
    </table>

    <h4>options</h4>
    <table>
        <tr>
            <th>option名</th>
            <th>说明</th>
        </tr>
        <tr>
            <td>-w, --watch</td>
            <td>增加一个监听文件变化的监听器，每当文件保存一次，都会执行一次转换</td>
        </tr>
        <tr>
            <td>{`-p, --plugin <pluginName>`}</td>
            <td>增加插件，pluginName是插件的npm包名，多个插件用“,”分隔。要求插件在试用前必须用先按照其npm包</td>
        </tr>
    </table>

    <h1>开发</h1>

    <h2>插件开放</h2>
    <p>插件的api暂未稳定，暂时不对外开放。</p>

    <h2>系统插件</h2>
    <li><a href="https://github.com/laden666666/my-doc-jsx-plugin-template">my-doc-jsx-plugin-template</a>：严格来说my-doc-jsx-plugin-template不是一个插件，他是一个插件开放模板。</li>
    <li><a href="https://github.com/laden666666/my-doc-jsx-plugin-api">my-doc-jsx-plugin-api</a>：一个my-doc-jsx插件，用于书写api文档使用。my-doc-jsx-plugin-api可以基于注释及部分代码，生成对应语言的api文档。目前仅支持javascript和typescript两种语言。</li>

</doc>
