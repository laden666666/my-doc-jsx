/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag'

class Li extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    render(){
        var str = `*   ${this.renderChildren(this.getTextChildren())}
`;
        return str;
    }
}

export default Li;