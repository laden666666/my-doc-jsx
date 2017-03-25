/**
 * 基础标签,所有标签都是继承继承标签的
 */
class BaseTag{

    render(selfDom, output){
        console.warn("不支持渲染此行内标签：" + selfDom.type);
    }
}

export default BaseTag;