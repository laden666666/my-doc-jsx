/**
 * Created by njz on 2017/3/26.
 */
import InlineTag from '../../../core/InlineTag'

class String extends InlineTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
    }
    render(){
        return this.content;
    }
}

export default String;