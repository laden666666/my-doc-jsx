/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'

export class P extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: HTMLRender) {
        var str = `<p class="mydoc_p"> ${render.renderChildInlineNodes(this.childPseudoNodes)}</p>`;
        return str;
    }
}