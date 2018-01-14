/**
 * Created by njz on 2017/3/26.
 */
import InlineTag from '../../../core/InlineTag'
import util from '../../../util'

class String extends InlineTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
    }
    render(){
        return util.escapeHTML(this.content);
    }
}

export default String;