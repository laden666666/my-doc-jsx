/**
 * Created by njz on 2017/3/26.
 */
import {InlineNode} from '../../../core/InlineNode'
import {HTMLRender} from '../'
const style = require('./Span.css')
export class Span extends InlineNode<HTMLRender>{
    async render(render: HTMLRender){
        render.setStyle('span', style)
        return `<span class="mydoc_span">${await render.renderInlineNodes(this.childPseudoNodes)}</span>`;
    }
}
