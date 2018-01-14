/**
 * Created by njz on 2017/4/17.
 */
import BlockTag from '../../../core/BlockTag'

class Blockquote extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    render(){
        var str = `<blockquote class="mydoc_blockquote"> ${this.$renderChildren(this.$getChildrenText())}</blockquote>`;
        return str;
    }
}

export default Blockquote;