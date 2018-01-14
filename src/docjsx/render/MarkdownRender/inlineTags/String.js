/**
 * Created by njz on 2017/3/26.
 */
import InlineTag from '../../../core/InlineTag'
var escape = require('escape-html');

class String extends InlineTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
    }
    render(){
        return escape(this.content);
    }
}

export default String;