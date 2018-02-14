/**
 * Created by njz on 2018/2/14.
 */
import BlockTag from '../../../core/BlockTag'

class H3 extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 3.98;
    }

    render() {
        var str =
            `<div class="mydoc_h3">
                <a class="mydoc_h3_a">
                    <h3 class="mydoc_h3_h3">${this.$renderChildren(this.$getChildrenText())}</h3>
                </a>
                <div class="mydoc_h3_content">
                    ${this.$renderChildren(this.childNodes)}
                </div>
            </div>`;
        return str;
    }
}

export default H3;