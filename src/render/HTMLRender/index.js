/**
 * Created by njz on 2017/3/25.
 */
import BaseRenderTools from '../../core/BaseRenderTools';
import Blog from './blockTags/Blog';
import H1 from './blockTags/H1';
import H2 from './blockTags/H2';
import P from './blockTags/P';
import Nav from './blockTags/Nav';


import String from './inlineTags/String';
import Span from './inlineTags/Span';

class HTMLRender extends BaseRenderTools{
    constructor(){
        super()
        this.$blockTagMap = {
            p: P,
            h1: H1,
            h2: H2,
            blog: Blog,
            nav: Nav,
        }
        this.$inlineTagMap = {
            string: String,
            span: Span,
        }
    }
}

export default HTMLRender;