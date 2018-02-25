/**
 * Created by njz on 2017/4/17.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'

export class Blockquote extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: HTMLRender){
        var str = `<blockquote class="mydoc_blockquote">${render.renderChildInlineNodes(this.childPseudoNodes)}</blockquote>`;
        return str;
    }
}