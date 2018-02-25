/**
 * Created by njz on 2017/3/26.
 */
import * as util from '../../../util'

import {InlineNode} from '../../../core/InlineNode'
import {HTMLRender} from '../'
export class String extends InlineNode<HTMLRender>{
    render(render: HTMLRender){
        return util.escapeHTML(this.content);
    }
}