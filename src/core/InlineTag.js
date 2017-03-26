import Output from './Output';
import BaseTag from './BaseTag';

/**
 * 基础标签,所有标签都是继承继承标签的
 */
class InlineTag extends BaseTag{

    _setDom(selfDom, render){
        this.selfDom = selfDom;
        this._render = render;
        this._output = new Output();
    }

    render(){
        console.warn("不支持渲染此行内标签：" + this.selfDom.type);
    }

    append(str){
        this._output.append(str);
    }
}

export default InlineTag;