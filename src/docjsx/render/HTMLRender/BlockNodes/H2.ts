/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'

export class H2 extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 3.99;
    }

    render(render: HTMLRender){
        var str =
            `<div class="mydoc_h2">
                    <a class="mydoc_h2_a">
                        <h2 class="mydoc_h2_h2">${render.renderChildInlineNodes(this.childPseudoNodes)}</h2>
                    </a>
                    <div class="mydoc_h2_content">
                        ${render.renderChildBlockNodes(this.childNodes)}
                    </div>
                </div>`;
        return str;

    }
}
