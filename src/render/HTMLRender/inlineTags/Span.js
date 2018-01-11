/**
 * Created by njz on 2017/3/26.
 */
import InlineTag from '../../../core/InlineTag'

class Span extends InlineTag{
    render(){
        return `<span>${this.renderChildren(this.childNodes)}</span>`;
    }
}

export default Span;