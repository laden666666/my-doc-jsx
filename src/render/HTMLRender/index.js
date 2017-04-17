/**
 * Created by njz on 2017/3/25.
 */
import BaseRenderTools from '../../core/BaseRenderTools';
import Blog from './blockTags/Blog';
import H1 from './blockTags/H1';
import H2 from './blockTags/H2';
import P from './blockTags/P';
import Nav from './blockTags/Nav';
import Blockquote from './blockTags/Blockquote';

import Strong from './inlineTags/Strong';
import A from './inlineTags/A';
import Span from './inlineTags/Span';
import String from './inlineTags/String';

class HTMLRender extends BaseRenderTools{
    constructor(){
        super()
        this.$blockTagMap = {
            p: P,
            h1: H1,
            h2: H2,
            blog: Blog,
            nav: Nav,
            blockquote: Blockquote,
        }
        this.$inlineTagMap = {
            strong: Strong,
            string: String,
            span: Span,
            a: A,
        }
    }
}

export default HTMLRender;