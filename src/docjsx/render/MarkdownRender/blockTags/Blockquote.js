/**
 * Created by njz on 2017/4/17.
 */
import BlockTag from '../../../core/BlockTag'

class Blockquote extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    render(){
        var str = `> ${this.renderChildren(this.getTextChildren())}
`;
        return str;
    }
}

export default Blockquote;