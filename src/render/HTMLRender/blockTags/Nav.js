/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'
import stlye from './Nav.css'

class Nav extends BlockTag{
    constructor(){
        super();
        this.priority = 10;
    }
    render(subRender){


        this.append(
            `<div class='myblog_nav'
                <aside class='myblog_nav_nav'>
                     
                </aside>
                <div class='myblog_nav_content'>`)
                    subRender()
        this.append(
                `</div>
            </div>`);
    }
}

export default Nav;