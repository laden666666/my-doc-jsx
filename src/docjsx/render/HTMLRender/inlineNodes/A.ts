/**
 * Created by njz on 2017/4/17.
 */
import {InlineNode} from '../../../core/InlineNode'
import {HTMLRender} from '../'
export class A extends InlineNode<HTMLRender>{
    render(render: HTMLRender){
        return `<a class="mydoc_a" ${ this.props.href ? 'href="' + this.props.href + '"' : '' }>${render.renderChildInlineNodes(this.childPseudoNodes)}</a>`;
    }
}