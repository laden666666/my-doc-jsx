/**
 * Created by njz on 2017/4/17.
 */
import {BlockNode} from '../../../core/BlockNode'
import {MarkdownRender} from '../'

export class Img extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(){
        return `![Alt](${this.props.src})
`;
    }
}
