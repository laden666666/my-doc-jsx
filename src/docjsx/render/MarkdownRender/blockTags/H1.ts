/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {MarkdownRender} from '../'

export class H1 extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 4;
    }

    render(render: MarkdownRender){
        var str =
            `# ${render.renderInlineNodes(this.childPseudoNodes)}
${render.renderBlockNodes(this.childNodes)}
`;
        return str;
    }
}
