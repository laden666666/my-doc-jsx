/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'
import stlye from './P.css'

class P extends BlockTag{
    render(subRender){
        this.append(
            `<p class="myblog_p">${this.getLine(this.children)}</p>`);

    }
}

export default P;