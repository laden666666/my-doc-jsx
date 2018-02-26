/**
 * Created by njz on 2018/2/14.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'
const style = require('./H4.css')

export class H4 extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 3.97;
    }

    render(render: HTMLRender) {
        render.setStyle('h4', style)
        var str =
            `<div class="mydoc_h4">
                <a class="mydoc_h4_a">
                    <h4 class="mydoc_h4_h4">${render.renderInlineNodes(this.childPseudoNodes)}</h4>
                </a>
                <div class="mydoc_h4_content">
                    ${render.renderBlockNodes(this.childNodes)}
                </div>
            </div>`;
        return str;
    }
}