/**
 * Created by njz on 2017/3/26.
 */
import InlineTag from '../../../core/InlineTag'

class Span extends InlineTag{
    render(){
        this.append(`<span>${this.getLine(this.children)}</span>`);
    }
}

export default Span;