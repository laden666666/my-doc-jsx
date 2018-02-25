/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag';

class Doc extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = Infinity;
    }

    render(){
        return `<article class='mydoc'>
                    ${this.$renderChildren(this.childNodes)}
                </article>`
    }
}

export default Doc;