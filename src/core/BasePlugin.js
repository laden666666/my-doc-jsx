/**
 * 插件库的基础类
 */
class BasePlugin {
    constructor(){
        this.engine = {

        }

        //输出工具
        this.blockTagMap = {};
        //输出工具
        this.inlineTagMap = {};
    }

    /**
     * 向插件库注册块级标签
     * @param engine        引擎
     * @param name          标签名
     * @param blockTag      块级标签扩展
     */
    registerBlockTag(engine, name, blockTag){
        if(!this.engine[engine]){
            this.engine[engine] = {
                blockTagMap : {},
                inlineTagMap : {},
            }
        }

        this.engine[engine].blockTagMap[name] = blockTag
    }

    /**
     * 向插件库注册行内标签
     * @param engine        引擎
     * @param name          标签名
     * @param inlineTag     行内标签扩展
     */
    registerInlineTag(engine, name, inlineTag){
        if(!this.engine[engine]){
            this.engine[engine] = {
                blockTagMap : {},
                inlineTagMap : {},
            }
        }

        this.engine[engine].inlineTagMap[name] = inlineTag
    }
}

export default BasePlugin;