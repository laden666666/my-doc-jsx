/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'

export class Nav extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 10;
    }
    render(render: HTMLRender){
        var str = `<div class='mydoc_nav'>
                <aside class='mydoc_nav_nav'>
                </aside>
                <div class='mydoc_nav_content'>
                    ${render.renderChildBlockNodes(this.childNodes)}
                </div>
            </div>`;
        return str;
    }
}