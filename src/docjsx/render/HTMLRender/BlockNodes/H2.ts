/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'
const style = require('./H2.css')

export class H2 extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 3.99;
    }

    render(render: HTMLRender){
        render.setStyle('h2', style)
        var str =
            `<div class="mydoc_h2">
                    <a class="mydoc_h2_a">
                        <h2 class="mydoc_h2_h2">${render.renderInlineNodes(this.childPseudoNodes)}</h2>
                    </a>
                    <div class="mydoc_h2_content">
                        ${render.renderBlockNodes(this.childNodes)}
                    </div>
                </div>`;
        return str;

    }
}
