/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'

class Nav extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 10;
    }
    render(){
        var str = `[TOC]
${this.$renderChildren(this.childNodes)}`;
        return str;
    }
}

export default Nav;