/**
 * Created by njz on 2017/4/17.
 */
import InlineTag from '../../../core/InlineTag'

class A extends InlineTag{
    render(){
        return `[${this.renderChildren(this.childNodes)}](${this.content.props.href || '' } "") `
    }
}

export default A;