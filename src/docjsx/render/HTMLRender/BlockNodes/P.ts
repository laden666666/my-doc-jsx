/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'
const style = require('./P.css')

export class P extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: HTMLRender) {
        render.setStyle('p', style)
        var str = `<p class="mydoc_p"> ${render.renderInlineNodes(this.childPseudoNodes)}</p>`;
        return str;
    }
}