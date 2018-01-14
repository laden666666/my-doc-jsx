/**
 * Created by njz on 2017/4/17.
 */
import InlineTag from '../../../core/InlineTag'

class Strong extends InlineTag{
    render(){
        return `<strong class="myblog_strong">${this.$renderChildren(this.childNodes)}</strong>`;
    }
}

export default Strong;