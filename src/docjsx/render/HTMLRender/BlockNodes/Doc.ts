/**
 * Created by njz on 2017/3/26.
 */
import { BlockNode } from '../../../core/BlockNode';
import {HTMLRender} from '../'

export class Doc extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = Infinity;
    }

    render(render: HTMLRender){
        return `<article class='mydoc'>
                    ${render.renderChildBlockNodes(this.childNodes)}
                </article>`
    }
}