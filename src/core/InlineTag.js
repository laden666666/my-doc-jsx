import Node from './Node';

/**
 * 基础标签,所有标签都是继承继承标签的
 */
class InlineTag extends Node{
    constructor(render, content, parentNode=null){
        super(render, content, parentNode)
        this.priority = 0;
    }

    render(){
        console.warn("不支持渲染此行内标签：" + this.selfDom.type);
        return "";
    }
}

export default InlineTag;