/**
 * Created by njz on 2018/2/14.
 */
import BlockTag from '../../../core/BlockTag'

class H4 extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 3.97;
    }

    render() {
        var str =
            `<div class="mydoc_h4">
                <a class="mydoc_h4_a">
                    <h4 class="mydoc_h4_h4">${this.$renderChildren(this.$getChildrenText())}</h4>
                </a>
                <div class="mydoc_h4_content">
                    ${this.$renderChildren(this.childNodes)}
                </div>
            </div>`;
        return str;
    }
}

export default H4;