/**
 * Created by njz on 2017/4/17.
 */
import BlockTag from '../../../core/BlockTag'

class Img extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    render(){
        return `![Alt](${this.content.props.src})
`;
    }
}

export default Img;