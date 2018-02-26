/**
 * Created by njz on 2017/4/17.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'
const style = require('./Blockquote.css')

export class Blockquote extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: HTMLRender){
        render.setStyle('blockquote', style)
        var str = `<blockquote class="mydoc_blockquote">${render.renderInlineNodes(this.childPseudoNodes)}</blockquote>`;
        return str;
    }
}