/**
 * Created by njz on 2017/4/17.
 */
import InlineTag from '../../../core/InlineTag'

class A extends InlineTag{
    render(){
        return `<a class="myblog_a" ${ this.content.props.href ? 'href="' + this.content.props.href + '"' : '' }>${this.$renderChildren(this.childNodes)}</a>`;
    }
}

export default A;