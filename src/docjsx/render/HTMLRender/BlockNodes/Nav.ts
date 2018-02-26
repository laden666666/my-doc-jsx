/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'
const style = require('./Li.css')

export class Nav extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 10;
    }
    render(render: HTMLRender){
        render.setStyle('nav', style)
        var str = `<div class='mydoc_nav'>
                <aside class='mydoc_nav_nav'>
                </aside>
                <div class='mydoc_nav_content'>
                    ${render.renderBlockNodes(this.childNodes)}
                </div>
            </div>`;
        return str;
    }
}