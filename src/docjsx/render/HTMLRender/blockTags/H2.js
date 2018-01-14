/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'

class H2 extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 3;
    }

    render(){
        var str =
            `<div class="mydoc_h2">
                    <a class="mydoc_h2_a">
                        <h2 class="mydoc_h2_h2">${this.$renderChildren(this.$getChildrenText())}</h2>
                    </a>
                    <div class="mydoc_h1_content">
                        ${this.$renderChildren(this.childNodes)}
                    </div>
                </div>`;
        return str;

    }
}

export default H2;