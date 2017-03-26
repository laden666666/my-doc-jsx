/**
 * Created by njz on 2017/3/26.
 */
import BlockTag from '../../../core/BlockTag';
import style from './Blog.css';

class Blog extends BlockTag{
    render(subRender){
        this.append("<article class='myblog'>");
        subRender()
        this.append("</article>");
    }
}

export default Blog;