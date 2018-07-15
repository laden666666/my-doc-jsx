/**
 * Created by njz on 2017/3/26.
 */
import {InlineNode} from '../../../core/InlineNode'
import {MarkdownRender} from '../'

export class Span extends InlineNode<MarkdownRender>{

    async render(render: MarkdownRender){
        return `${await render.renderInlineNodes(this.childPseudoNodes)}`;
    }
}
