/**
 * Created by njz on 2017/4/17.
 */
import {InlineNode} from '../../../core/InlineNode'
import {MarkdownRender} from '../'

export class A extends InlineNode<MarkdownRender>{
    async render(render: MarkdownRender){
        return `[${await render.renderInlineNodes(this.childPseudoNodes)}](${this.content.props.href || '' } "") `
    }
}
