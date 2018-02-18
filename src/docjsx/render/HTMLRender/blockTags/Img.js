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
        var str = `<img class="mydoc_img" ${this.content.props.height ? `height="${this.content.props.height}"` : ''} ${this.content.props.width ? `width="${this.content.props.width}"` : ''} src="${this.content.props.src}"/>`;
        return str;
    }
}

export default Img;