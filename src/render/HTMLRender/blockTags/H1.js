/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'
import style from './H1.css'

class H1 extends BlockTag{
    constructor(){
        super();
        this.priority = 4;
    }

    render(subRender){
        this.append(
            `<div class="myblog_h1">
                <a class="myblog_h1_a" href="#${this.getLine(this.children)}">
                    <h1 id="${this.getLine(this.children)}" class="myblog_h1_h1">${this.getLine(this.children)}</h1>
                </a>
                <div class="myblog_h1_content">`)
                    subRender()
        this.append(
                `</div>
            </div>`);

}
}

export default H1;