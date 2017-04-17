/**
 * Created by njz on 2017/4/17.
 */
import BlockTag from '../../../core/BlockTag'
import stlye from './Blockquote.css'

class Blockquote extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    render(){
        var str = `<blockquote class="myblog_blockquote"> ${this.renderChildren(this.getTextChildren())}</blockquote>`;
        return str;
    }
}

export default Blockquote;