/**
 * Created by njz on 2017/4/17.
 */
import {BlockNode} from '../../../core/BlockNode'
import {MarkdownRender} from '../'

export class Blockquote extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: MarkdownRender){
        var str = `> ${render.renderChildInlineNodes(this.childPseudoNodes)}
`;
        return str;
    }
}