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

    /**
     * 渲染函数，这个是需要继承的虚函数
     * @returns {string}                渲染后的字符串
     */
    render(){
        console.warn("不支持渲染此行内标签：" + this.content.type);
        return "";
    }

    /**
     * 系统方法，获取当前节点的text文本
     * @param children
     * @returns {*}
     */
    $renderChildren(children){
        return this.renderTools.$renderChildren(children);
    }
}

export default InlineTag;