/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'

class Li extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    render(){
        var str = `<ul class="myblog_li"><li> ${this.$renderChildren(this.$getChildrenText())}</li></ul>`;
        return str;
    }
}

export default Li;