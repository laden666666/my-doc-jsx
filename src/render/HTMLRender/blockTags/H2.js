/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'

class H1 extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 3;
    }

    render(subRender){
        var str =
            `<div class="myblog_h1">
                    <a class="myblog_h1_a">
                        <h2 class="myblog_h1_h1">${this.renderChildren(this.getTextChildren())}</h2>
                    </a>
                    <div class="myblog_h1_content">
                        ${this.renderChildren(this.childNodes)}
                    </div>
                </div>`;
        return str;

    }
}

export default H1;