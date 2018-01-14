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
        var str = `<img class="mydoc_img" src="${this.content.props.src}"/>`;
        return str;
    }
}

export default Img;