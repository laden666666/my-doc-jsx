/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'
const style = require('./H1.css')

export class H1 extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: HTMLRender){
        render.setStyle('h1', style)
        var str =
            `<div class="mydoc_h1">
                <a class="mydoc_h1_a">
                    <h1 class="mydoc_h1_h1">${render.renderInlineNodes(this.childPseudoNodes)}</h1>
                </a>
                <div class="mydoc_h1_content">
                    ${render.renderBlockNodes(this.childNodes)}
                </div>
            </div>`;
        return str;
    }
}