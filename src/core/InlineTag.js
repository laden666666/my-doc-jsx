import Node from './Node';

/**
 * 基础标签,所有标签都是继承继承标签的
 */
class InlineTag extends Node{
    constructor(renderTools, content, tree, parentNode=null){
        super(content, tree, parentNode);
        //输出工具
        this.renderTools = renderTools;
    }

    render(childrenRender){
        console.warn("不支持渲染此行内标签：" + this.selfDom.type);
        return "";
    }

    renderChildren(children){
        return this.renderTools.renderChildren(children);
    }
}

export default InlineTag;