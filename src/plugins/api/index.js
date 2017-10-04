/**
 * Created by njz on 2017/10/3.
 */
import {
    BasePlugin,
    usePlugin
} from "../../index"
import API from './HTMLRender/blockTags/API'

class APIPlugin extends BasePlugin{
    constructor(){
        super()
        this.registerBlockTag('HTML', 'api' ,API)
    }
}

usePlugin(new APIPlugin)