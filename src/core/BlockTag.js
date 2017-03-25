/**
 * 基础标签,所有标签都是继承继承标签的
 */
class BlockTag{
    constructor(){
        //块标签的优先级。0内容、1四级标题、2三级标题、3二级标题、4一级标题
        this.priority = 0;
    }

    _setDom(selfDom, output, allDom){
        this.selfDom = selfDom;
        this.output = output;
        this.allDom = allDom;
    }

    render(childrenRender){
        console.warn("不支持渲染此块标签：" + selfDom.type);
    }
}

export default BlockTag;