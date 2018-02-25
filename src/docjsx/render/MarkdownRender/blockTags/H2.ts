/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {MarkdownRender} from '../'

export class H2 extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 3.99;
    }

    render(render: MarkdownRender){
        var str =
            `## ${render.renderChildInlineNodes(this.childPseudoNodes)}
${render.renderChildBlockNodes(this.childNodes)}
`;
        return str;

    }
}