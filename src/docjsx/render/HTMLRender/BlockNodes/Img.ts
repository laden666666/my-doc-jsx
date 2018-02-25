/**
 * Created by njz on 2017/4/17.
 */
import {BlockNode} from '../../../core/BlockNode'
import {HTMLRender} from '../'

export class Img extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: HTMLRender) {
        var str = `<img class="mydoc_img" ${this.props.height ? `height="${this.props.height}"` : ''} ${this.props.width ? `width="${this.props.width}"` : ''} src="${this.props.src}"/>`;
        return str;
    }
}
