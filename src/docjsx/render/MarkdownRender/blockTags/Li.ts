/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {MarkdownRender} from '../'

export class Li extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    async render(render: MarkdownRender){
        var str = `*   ${await render.renderInlineNodes(this.childPseudoNodes)}
`;
        return str;
    }
}