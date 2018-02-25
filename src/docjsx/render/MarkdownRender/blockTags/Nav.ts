/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {MarkdownRender} from '../'

export class Nav extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 10;
    }

    render(render: MarkdownRender){
        var str = `[TOC]
${render.renderChildBlockNodes(this.childNodes)}`;
        return str;
    }
}
