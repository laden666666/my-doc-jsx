/**
 * 基础标签,所有标签都是继承继承标签的
 */
class BaseTag{

    _setDom(selfDom, render, allDom){
        this.selfDom = selfDom;
        this._render = render;
        this.allDom = allDom;
    }

    append(str){
        this._render.output.append(str);
    }

    appendLine(list){
        this._render._renderLine(list);
    }

    getLine(list){
        return this._render._getLine(list);
    }

    getText(){
        if(!this.children){
            return "";
        }
        return this.selfDom.props.children instanceof Array ? ;
    }

    get children(){
        return this.selfDom.props.children;
    }

}

export default BaseTag;