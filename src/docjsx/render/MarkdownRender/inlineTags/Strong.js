/**
 * Created by njz on 2017/4/17.
 */
import InlineTag from '../../../core/InlineTag'

class Strong extends InlineTag{
    render(){
        return ` **${this.$renderChildren(this.childNodes)}** `;
    }
}

export default Strong;