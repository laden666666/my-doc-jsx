/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'
const style = require('./Li.css')

export class Li extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    async render(render: HTMLRender){
        render.setStyle('li', style)
        var str = `<ul class="mydoc_li"><li> ${await render.renderInlineNodes(this.childPseudoNodes)}</li></ul>`;
        return str;
    }
}