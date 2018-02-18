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

    _createDocTree(doc){
        //因为props是只读字段，故采用...使其变为可写字段
        doc = {...doc, props: {...doc.props}}
        if(doc.props.children){
            //将props.children不是数组的情况，都改为数组，这样方便后续处理
            if(!Array.isArray(doc.props.children)){
                doc.props.children = [doc.props.children];
            }

            //获取doc根元素，将其封装为Node对象
            var DocClass = new this._getTagInstance(doc, this.$blockTagMap);
            var domTree = new Tree(new DocClass(this, doc));

            //将其鞥这为块级的Node对象
            doc.props.children.forEach((item)=>{
                var ItemClass = new this._getTagInstance(item, this.$blockTagMap);
                var tagInstance = new ItemClass(this, item);
                this._appendBlockChildren(domTree, tagInstance);

                //将其子元素封装
                tagInstance._setBlockTagTree(this._createTextTree(tagInstance));
            })
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
        var blockTagTree = new Tree(root);

        this._appendTextChildren(blockTagTree, blockTagInstance.content.props.children)
        return blockTagTree;
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
    $render(doc){
        //检验是否是虚拟dom
        if(!doc || !doc.props || doc.type != "doc"){
            throw new TypeError("doc is invalid Virtual Dom");
        }

        var tree = this._createDocTree(doc);
        this.output.append(tree.root.render());
        return this.output.getContent();
    }

    $renderChildren(childNodes){
        var str = '';
        childNodes.forEach((childTree)=>{
            str += childTree.render()
        });
        return str;
    }

    $registerBlockTag(tagName, fn){
        this.$blockTagMap[tagName] = fn;
    }

    $registerInlineTag(tagName, fn){
        this.$inlineTagMap[tagName] = fn;
    }

    $getAllBlockTags(){
        return Object.entries(this.$blockTagMap).map(arrs=>({
            name: arrs[0],
            plugin: arrs[1]
        }));
    }

    $getAllInlineTags(){
        return Object.entries(this.$inlineTagMap).map(arrs=>({
            name: arrs[0],
            plugin: arrs[1]
        }));
    }

    _usePlugin(plugins){
        for(let key in plugins.blockTagMap){
            this.$registerBlockTag(key, plugins.blockTagMap[key])
        }
        for(let key in plugins.inlineTagMap){
            this.$registerInlineTag(key, plugins.inlineTagMap[key])
        }
    }
}

export default BaseRenderTools;