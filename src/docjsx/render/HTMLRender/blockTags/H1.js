/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'

class H1 extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 4;
    }

    render() {
        var str =
            `<div class="myblog_h1">
                <a class="myblog_h1_a">
                    <h1 class="myblog_h1_h1">${this.$renderChildren(this.$getChildrenText())}</h1>
                </a>
                <div class="myblog_h1_content">
                    ${this.$renderChildren(this.childNodes)}
                </div>
            </div>`;
        return str;
    }
}

export default H1;