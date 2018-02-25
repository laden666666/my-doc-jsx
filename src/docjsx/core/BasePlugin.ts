/**
 * 插件库的基础类
 */
export class BasePlugin {

    //输出工具
    blockNodeMap = {};
    //输出工具
    inlineNodeMap = {};

    format = {}

    constructor(){
        
    }

    /**
     * 向插件库注册块级标签
     * @param format        引擎
     * @param name          标签名
     * @param blockTag      块级标签扩展
     */
    registerBlockTag(format, name, blockTag){
        if(!this.format[format]){
            this.format[format] = {
                blockTagMap : {},
                inlineTagMap : {},
            }
        }

        this.format[format].blockTagMap[name] = blockTag
    }

    /**
     * 向插件库注册行内标签
     * @param format        引擎
     * @param name          标签名
     * @param inlineTag     行内标签扩展
     */
    registerInlineTag(format, name, inlineTag){
        if(!this.format[format]){
            this.format[format] = {
                blockTagMap : {},
                inlineTagMap : {},
            }
        }

        this.format[format].inlineTagMap[name] = inlineTag
    }
}