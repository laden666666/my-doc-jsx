/**
 * Created by njz on 2017/10/3.
 */
import {
    BasePlugin,
    usePlugin
} from "../../index"
import htmlAPI from './HTMLRender/blockTags/API'
import markdownAPI from './MarkdownRender/blockTags/API'

class APIPlugin extends BasePlugin{
    constructor(){
        super()
        this.registerBlockTag('HTML', 'api' ,htmlAPI)
        this.registerBlockTag('MARKDOWN', 'api' ,markdownAPI)
    }
}

usePlugin(new APIPlugin)