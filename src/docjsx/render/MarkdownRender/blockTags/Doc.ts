/**
 * Created by njz on 2017/3/26.
 */
import { BlockNode } from '../../../core/BlockNode';
import {MarkdownRender} from '../'

export class Doc extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = Infinity;
    }

    render(render: MarkdownRender){
        return `${render.renderChildBlockNodes(this.childNodes)}`
    }
}