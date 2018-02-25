/**
 * Created by njz on 2017/3/26.
 */
import {InlineNode} from '../../../core/InlineNode'
import {HTMLRender} from '../'
export class Span extends InlineNode<HTMLRender>{
    render(render: HTMLRender){
        return `<span class="mydoc_span">${render.renderChildInlineNodes(this.childPseudoNodes)}</span>`;
    }
}
