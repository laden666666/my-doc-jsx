/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'

class Nav extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 10;
    }
    render(){
        var str = `<div class='mydoc_nav'>
                <aside class='mydoc_nav_nav'>
                </aside>
                <div class='mydoc_nav_content'>
                    ${this.$renderChildren(this.childNodes)}
                </div>
            </div>`;
        return str;
    }
}

export default Nav;