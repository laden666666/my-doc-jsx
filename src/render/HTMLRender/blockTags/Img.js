/**
 * Created by njz on 2017/4/17.
 */
import BlockTag from '../../../core/BlockTag'
import stlye from './Img.css'

class Img extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    render(){
        var str = `<img class="myblog_img" src="${this.content.props.src}"/>`;
        return str;
    }
}

export default Img;