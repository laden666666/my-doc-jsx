/**
 * Created by njz on 2017/3/26.
 */
import InlineTag from '../../../core/InlineTag'

class String extends InlineTag{
    render(){
        this.append(this.selfDom);
    }
}

export default String;