/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'

class H1 extends BlockTag{
    constructor(){
        super();
        this.priority = 3;
    }

    render(subRender){
        this.append(
            `<div class="myblog_h2">
                <a class="myblog_h2_a">
                    <h1 class="myblog_h2_h2">${this.getLine(this.children)}</h1>
                </a>
                <div class="myblog_h2_content">`)
                    subRender()
        this.append(
                `</div>
            </div>`);

    }
}

export default H1;