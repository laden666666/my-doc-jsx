/**
 * Created by njz on 2017/3/25.
 */
import BaseRenderTools from '../../core/BaseRenderTools';
import Doc from './blockTags/Doc';
import H1 from './blockTags/H1';
import H2 from './blockTags/H2';
import P from './blockTags/P';
import Nav from './blockTags/Nav';
import Blockquote from './blockTags/Blockquote';
import Code from './blockTags/Code';
import Li from './blockTags/Li';
import Img from './blockTags/Img';

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
            doc: Doc,
            nav: Nav,
            blockquote: Blockquote,
            code: Code,
            li: Li,
            img: Img,
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