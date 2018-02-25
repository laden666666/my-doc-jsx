/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode} from '../../../core/BlockNode'
import {MarkdownRender} from '../'


export class Code extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: MarkdownRender){
        var lang = this.props.lang || 'javascript';
        var code = this.childPseudoNodes[0] ? this.childPseudoNodes[0].getText() : ''
        return `\`\`\`${lang}
${code}
\`\`\`
`
    }
}