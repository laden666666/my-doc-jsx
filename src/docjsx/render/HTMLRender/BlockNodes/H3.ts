/**
 * Created by njz on 2018/2/14.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'
const style = require('./H3.css')

export class H3 extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 3.98;
    }

    async render(render: HTMLRender) {
        render.setStyle('h3', style)
        var str =
            `<div class="mydoc_h3">
                <a class="mydoc_h3_a">
                    <h3 class="mydoc_h3_h3">${await render.renderInlineNodes(this.childPseudoNodes)}</h3>
                </a>
                <div class="mydoc_h3_content">
                    ${await render.renderBlockNodes(this.childNodes)}
                </div>
            </div>`;
        return str;
    }
}