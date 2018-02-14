/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'

class H3 extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 3.98;
    }

    render(subRender){
        var str =
            `### ${this.$renderChildren(this.$getChildrenText())}
${this.$renderChildren(this.childNodes)}
`;
        return str;

    }
}

export default H3;