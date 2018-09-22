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

    async render(render: MarkdownRender){
        var str =
            `
## ${await render.renderInlineNodes(this.childPseudoNodes)}
${await render.renderBlockNodes(this.childNodes)}
`;
        return str;

    }
}