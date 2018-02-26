/**
 * Created by njz on 2017/4/17.
 */

import {InlineNode} from '../../../core/InlineNode'
import {HTMLRender} from '../'
const style = require('./Strong.css')
export class Strong extends InlineNode<HTMLRender>{
    render(render: HTMLRender){
        render.setStyle('strong', style)
        return `<strong class="mydoc_strong">${render.renderInlineNodes(this.childPseudoNodes)}</strong>`;
    }
}