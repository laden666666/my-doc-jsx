/**
 * Created by njz on 2017/3/26.
 */
import * as util from '../../../util'

import {InlineNode} from '../../../core/InlineNode'
import {MarkdownRender} from '../'

export class String extends InlineNode<MarkdownRender>{

    async render(render: MarkdownRender){
        return util.escapeHTML(this.content);
    }
}