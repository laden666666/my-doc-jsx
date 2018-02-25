/**
 * Created by njz on 2017/4/17.
 */

import {InlineNode} from '../../../core/InlineNode'
import {HTMLRender} from '../'
export class Strong extends InlineNode<HTMLRender>{
    render(render: HTMLRender){
        return `<strong class="mydoc_strong">${render.renderChildInlineNodes(this.childPseudoNodes)}</strong>`;
    }
}