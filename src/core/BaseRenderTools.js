import BlockTag from './BlockTag'
import InlineTag from './InlineTag'
import Output from './Output'
import Tree from './Tree'
import Node from './Node'

/**
 * Created by njz on 17/2/28.
 * 渲染平台的基础类。因为同一个xml(jsx)博客会渲染为不同的形式平台上,所以需要提供不同形式的博客渲染类,故采用策略模式。
 * 此为一个渲染平台策略的基础类,每个渲染策略都要继承这个类,并注册到渲染策略表中,由page标签统一配置渲染策略。
 * 每个标签都应该将他的渲染策略注册到
 *
 * jsx要求不可以标签嵌套，即使嵌套了渲染的时候也不会也不允许渲染子元素，这主要是吸取了markdown的优点，即不允许嵌套
 * 每个标签都有优先级，渲染的时候，会自动根据优先级渲染出一颗树，优先级低的标签会自动成为优先级高的标签的子元素。同时
 * 又扩充了markdown不支持的扩张性，使其可以输出更加丰富的内容
 *
 * 虚标签是供block标签内部渲染的标签，并不会被放到tree中。inlineTag是特殊的虚标签，他会被renderLine处理。inlineTag和其他虚标签一样
 * ，必须放到block标签中，否则会被忽略掉
 */
class BaseRenderTools{
    constructor(){
        this.$blockTagMap = {};
        this.$inlineTagMap = {};
        this.output = new Output();
    }

    _getTagInstance(item, tagMap){
        var type;
        if(typeof item == 'string'){
            type = 'string';
        } else{
            type = item.type;
        }

        return tagMap[type] || BlockTag;
    }

    _createBlogTree(blog){

        if(blog.props.children){
            if(!Array.isArray(blog.props.children)){
                blog.props.children = [blog.props.children];
            }

            var BlogClass = new this._getTagInstance(blog, this.$blockTagMap);
            var domTree = new Tree(new BlogClass(this, blog));
            blog.props.children.forEach((item)=>{
                var ItemClass = new this._getTagInstance(item, this.$blockTagMap);
                var tagInstance = new ItemClass(this, item);
                this._appendBlockChildren(domTree, tagInstance);

                tagInstance.setTextTree(this._createTextTree(tagInstance));
            })

            console.log(domTree)

            //this.output.append(this._renderTree(domTree.root, blog));
        }
        return domTree;
    }

    //增加节点，这里增加的是快级元素生成的节点，不允许增加行内元素节点
    _appendBlockChildren(tree, node){
        if(tree.currentNode.priority > node.priority){
            tree.currentNode.appendChild(node);
            tree.currentNode = node;
            node.tree = tree;
        } else if(tree.currentNode.priority == node.priority){
            tree.currentNode.parentNode.appendChild(node);
            tree.currentNode = node;
            node.tree = tree;
        } else if(tree.currentNode.priority < node.priority){
            tree.currentNode = tree.currentNode.parentNode;
            this._appendBlockChildren(tree, node);
        }
    }

    _createTextTree(blockTagInstance){
        var root = new Node();
        var textTree = new Tree(root);

        this._appendTextChildren(textTree, blockTagInstance.content.props.children)
        return textTree;
    }
    _appendTextChildren(tree, childrens=[]){
        if(!Array.isArray(childrens)){
            childrens = [childrens];
        }
        childrens.forEach(child=>{
            var InlineClass = this._getTagInstance(child, this.$inlineTagMap);
            var tagInstance = new InlineClass(this, child);
            tree.currentNode.appendChild(tagInstance);

            if(typeof child != 'string' && child.props.children.length){
                var _currentNode = tree.currentNode;
                tree.currentNode = tagInstance;
                this._appendTextChildren(tree, child.props.children)
                tree.currentNode = _currentNode;
            }
        })
    }

    //渲染的具体逻辑
    render(blog){

        //检验是否是虚拟dom
        if(!blog || !blog.props || blog.type != "blog"){
            throw new TypeError("blog is invalid Virtual Dom");
        }

        var tree = this._createBlogTree(blog);
        this.output.append(tree.root.render());
        return this.output.getContent();
    }

    renderChildren(childNodes){
        var str = '';
        childNodes.forEach((childTree)=>{
            str += childTree.render()
        });
        return str;
    }

    registerBlockTag(tagName, fn){
        this.$blockTagMap[tagName] = fn;
    }

    registerInlineTag(tagName, fn){
        this.$inlineTagMap[tagName] = fn;
    }

    getAllBlockTags(){
        return this.$blockTagMap;
    }

    getAllInlineTags(){
        return this.$inlineTagMap;
    }

    usePlugin(plugins){
    }
}

export default BaseRenderTools;