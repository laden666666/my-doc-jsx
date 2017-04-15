import Node from './Node';
/**
 * 基础标签,所有标签都是继承继承标签的
 */
class BlockTag extends Node{
    constructor(render, content, parentNode=null){
        super(render, content, parentNode);
        //标签优先级
        this.priority = 0;
        //文本数组，就是属于这个块级标签中的行内标签集合
        this.textTree = new ;
    }

    render(childrenRender){
        console.warn("不支持渲染此块标签：" + this.content.type);
        return "";
    }

    appendText(texts){
        if(!Array.isArray(texts)){
            texts = [texts];
        }
        texts.forEach(item=>{
            this.textArray.push(item)
        })
    }
}

export default BlockTag;