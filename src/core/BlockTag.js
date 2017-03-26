import BaseTag from './BaseTag';

/**
 * 基础标签,所有标签都是继承继承标签的
 */
class BlockTag extends BaseTag{
    constructor(){
        super();

        //块标签的优先级。0内容、11四级标题、12三级标题、13二级标题、14一级标题 20导航
        this.priority = 0;
    }

    render(childrenRender){
        console.warn("不支持渲染此块标签：" + selfDom.type);
    }
}

export default BlockTag;