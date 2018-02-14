/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag';

class Code extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    render(){
        var lang = this.content.props.lang || 'javascript';
        return `\`\`\`${this.content.props.lang || 'javascript'}
${this.$getChildrenText()[0].content}
\`\`\`
`
    }
}

export default Code;