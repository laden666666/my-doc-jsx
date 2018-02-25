/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'

export class H1 extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: HTMLRender){
        var str =
            `<div class="mydoc_h1">
                <a class="mydoc_h1_a">
                    <h1 class="mydoc_h1_h1">${render.renderChildInlineNodes(this.childPseudoNodes)}</h1>
                </a>
                <div class="mydoc_h1_content">
                    ${render.renderChildBlockNodes(this.childNodes)}
                </div>
            </div>`;
        return str;
    }
}

export default H1;