/**
 * Created by njz on 2017/4/17.
 */
import {InlineNode} from '../../../core/InlineNode'
import {HTMLRender} from '../'
const style = require('./A.css')
export class A extends InlineNode<HTMLRender>{
    render(render: HTMLRender){
        render.setStyle('a', style)
        return `<a class="mydoc_a" ${ this.props.href ? 'href="' + this.props.href + '"' : '' }>${render.renderInlineNodes(this.childPseudoNodes)}</a>`;
    }
}