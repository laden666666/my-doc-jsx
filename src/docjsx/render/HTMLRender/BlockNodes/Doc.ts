/**
 * Created by njz on 2017/3/26.
 */
import { BlockNode } from '../../../core/BlockNode';
import {HTMLRender} from '../'
const style = require('./Doc.css')

export class Doc extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = Infinity;
    }

    render(render: HTMLRender){
        const subText = render.renderBlockNodes(this.childNodes)
        render.setStyle('doc', style)
        return `${render.renderStyle()}
<article class='mydoc'>
    ${subText}
</article>`
    }
}