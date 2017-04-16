import Node from './Node';
import Tree from './Tree';
/**
 * 基础标签,所有标签都是继承继承标签的
 */
class BlockTag extends Node{
    constructor(renderTools, content, tree, parentNode=null){
        super(content, tree, parentNode);
        //块级标签优先级
        this.priority = 0;
        //文本数组，就是属于这个块级标签中的行内标签集合
        this.textTree = new Tree(new Node());
        //输出工具
        this.renderTools = renderTools;
    }

    render(childrenRender){
        console.warn("不支持渲染此块标签：" + this.content.type);
        return "";
    }

    setTextTree(textTree){
        this.textTree = textTree;
    }

    renderChildren(children){
        return this.renderTools.renderChildren(children);
    }

    getTextChildren(){
        return this.textTree.root.childNodes;
    }
}

export default BlockTag;