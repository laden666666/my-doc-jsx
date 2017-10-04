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
            `# ${this.renderChildren(this.getTextChildren())}
${this.renderChildren(this.childNodes)}
`;
        return str;
    }
}

export default H1;