/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'

export class Li extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: HTMLRender){
        var str = `<ul class="mydoc_li"><li> ${render.renderChildInlineNodes(this.childPseudoNodes)}</li></ul>`;
        return str;
    }
}