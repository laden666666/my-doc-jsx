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
     * @param blockNode      块级标签扩展
     */
    registerBlockNode(format, name, blockNode){
        if(!this.format[format]){
            this.format[format] = {
                blockNodeMap : {},
                inlineNodeMap : {},
            }
        }

        this.format[format].blockNodeMap[name] = blockNode
    }

    /**
     * 向插件库注册行内标签
     * @param format        引擎
     * @param name          标签名
     * @param inlineNode     行内标签扩展
     */
    registerInlineNode(format, name, inlineNode){
        if(!this.format[format]){
            this.format[format] = {
                blockNodeMap : {},
                inlineNodeMap : {},
            }
        }

        this.format[format].inlineNodeMap[name] = inlineNode
    }
}