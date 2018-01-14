/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'

class P extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    render(){
        var str = `<p class="mydoc_p"> ${this.$renderChildren(this.$getChildrenText())}</p>`;
        return str;
    }
}

export default P;