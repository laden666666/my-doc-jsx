/**
 * Created by njz on 2018/2/14.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'

export class H3 extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 3.98;
    }

    render(render: HTMLRender) {
        var str =
            `<div class="mydoc_h3">
                <a class="mydoc_h3_a">
                    <h3 class="mydoc_h3_h3">${render.renderChildInlineNodes(this.childPseudoNodes)}</h3>
                </a>
                <div class="mydoc_h3_content">
                    ${render.renderChildBlockNodes(this.childNodes)}
                </div>
            </div>`;
        return str;
    }
}