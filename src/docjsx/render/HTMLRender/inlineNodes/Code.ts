/**
 * Created by njz on 2017/3/26.
 */
import {InlineNode} from '../../../core/InlineNode'
import {HTMLRender} from '../'
const style = require('./Code.css')
export class Code extends InlineNode<HTMLRender>{
    async render(render: HTMLRender){
        render.setStyle('inline_code', style)
        return `<code class="mydoc_inline_code">${await render.renderInlineNodes(this.childPseudoNodes)}</code>`;
    }
}
