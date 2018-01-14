/**
 * Created by njz on 2017/3/26.
 */
import InlineTag from '../../../core/InlineTag'

class Span extends InlineTag{
    render(){
        return `${this.$renderChildren(this.childNodes)}`;
    }
}

export default Span;