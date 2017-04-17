/**
 * Created by njz on 2017/4/17.
 */
import InlineTag from '../../../core/InlineTag'
import stlye from './A.css'

class A extends InlineTag{
    render(){
        return `<a class="myblog_a">${this.renderChildren(this.childNodes)}</a>`;
    }
}

export default A;