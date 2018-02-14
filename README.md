# my-doc-jsx——一个基于jsx的文档书写、文档转换工具
## 富文本、office写文档的时代过去了
早期，大家都是使用富文本和office写博客，后来大家都改用了markdown，这是因为markdown是一个简单的标记语言。

使用标记语言，可以让我们的文档（博客）的内容和样式分离，甚至让计算机读懂我们文档的结构，使其将我们的文档任意转换格式。同时使用可扩展的标记语言，能够使用我们自定义的方言，去书写一些格式非常复杂但是具有结构性的内容。 

因此，在这个时代已经没有人在希望用富文本或者office去写文档，我们要标记语言。


## markdown、xml？还是其他标记语言
那么应该选用哪种标记语言呢？

 **xml** 无疑是最优秀的标记语言，xml具有较高的可扩展性，定义规范。但是xml不适合书写文档，因为他过于 **规范** ，不够灵活，严格的语法要求使人生畏；而且他对于转义的处理过也不够方便，一个空格都需要六个字符表示（ ），也没几个人能够记住这些转义。离开编辑器我们也很难直接使用xml去书写复杂的格式文档。

 **markdown** 无疑是最流行的用于文档书写的标记语言，它非常的简单，而且就是为了书写文档而生的。但是它不同于xml，扩展性不够，我们可以通过“```”扩展markdown的语法，但是书写起来非常不方便，而且格式也很混乱。 同时markdown方言太多，导致多种markdown编辑器编辑出的文档彼此居然不兼容。也许因为markdown的语法过于简单，因此用起来反而非常麻烦，相信很多让人都遇到过一个表格调整了半天显示还有问题的情况。这些问题都是因为markdown不具备xml的规范性导致的。

 **html** 本身就没有扩展性，同时也没有markdown方便，更不适合书写文档。包含了xml和markdown的全部缺点。

 **jsx** 对，你没看错，就是react提供的附属品——jsx。我们希望能够像写markdown一样方便，又希望像写xml一样规范并且有扩展性，而jsx不就是这样的一个标记语言吗？同时配合es6的 **模板字符串** ，可以完美地解决了转义问题。 使用jsx，并且实现像markdown和xml那样包装html，能够使我们使用可扩展的标记语言书写文档，这就是 **my-doc-jsx** 。



# my-doc-jsx
my-doc-jsx（以下简称docjsx）是一个使用jsx书写文档的工具，并支持多种形式的文档转换。docjsx主要特点有：

*   0.使用jsx语法编写文档
*   1.较好的语义化文档编写格式
*   2.支持将docjsx文档转换为html、markdown格式
*   3.可以浏览器、nodejs、cli等多种平台上转换文档
*   4.支持自定义插件，可以扩展标签

# 如何用docjsx书写文档
docjsx有着接近html的标签系统，每个段落都需要用标签标记起来，因此他不像markdown那样随意，格式上更加清晰整齐；同时他有着markdown一样的书写格式，他不像html那样层层嵌套，docjsx要求每个段落必须是并列关系，不能嵌套。

## 根标签
每一个docjsx必须使用doc标签定义。因为根标签的写法是固定的，所以docjsx可以省略根标签，不过省略了根标签就不符合jsx的书写规范，所以请酌情考虑。

```javascript
<doc>
    <h1>一级标题</h1>
    <h2>二级标签</h2>
</doc>
```
可以简写为：

```javascript
<h1>一级标题</h1>
<h2>二级标签</h2>
```

## 块级标签
定义段落的标签我们称之为块级标签，参考html中的块级标签，块级标签不能嵌套，系统提供的块级标签有：

### h1到h3
定义标题

```javascript
<h1>这是一个一级标题</h1>
<h2>这是一个二级标题</h2>
<h3>这是一个三级标题</h3>
<h3>这是一个四级标题</h3>
```

### nav
定义菜单

```javascript
<nav/>
```

### p
定义段落

```javascript
<p>这是一段话</p>
```

### img
定义图片，使用src属性定义

```javascript
<img src="url" />
```

### blockquote
定义引用，用于特殊说明解释

```javascript
<blockquote/>Here is a long quotation here is a long quotation here is a long quotation
here is a long quotation here is a long quotation here is a long quotation
here is a long quotation here is a long quotation here is a long quotation.</blockquote>
```

### code
定义代码展示，使用lang字段指出展示源码的语言。展示源码时候，最好用es6的模板字符串。

```javascript
<code lang="javascript">{
`function test(){
    console.log("hello world！")
}
test();`
}</code>
```
显示的效果为：

```javascript
function test(){
    console.log("hello world！")
}
test();
```

### li
定义列表。

```javascript
<li>0.test1</li>
<li>1.test2</li>
<li>2.test3</li>
<li>3.test4</li>
```


## 行内标签
定义段落中的词语的标签我们称之为行内标签，参考html中的行内标签，块级标签可以嵌套内标标签，但是行内标签不能嵌套块级标签，系统提供的块级标签有：

### a
定义超链接，通过href定义超链接的地址

```javascript
<p>点击可跳转<a href="http://www.baidu.com">百度</a></p>
```

### span
用于定义词语的标记，被标记的词语会高亮显示。

```javascript
<p>高亮显示<span>docjsx</span></p>
```

### strong
用于定义粗体

```javascript
<p><strong>加粗</strong>显示</p>
```



