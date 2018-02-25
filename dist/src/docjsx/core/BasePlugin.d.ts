/**
 * 插件库的基础类
 */
export declare class BasePlugin {
    blockNodeMap: {};
    inlineNodeMap: {};
    format: {};
    constructor();
    /**
     * 向插件库注册块级标签
     * @param format        引擎
     * @param name          标签名
     * @param blockNode      块级标签扩展
     */
    registerBlockNode(format: any, name: any, blockNode: any): void;
    /**
     * 向插件库注册行内标签
     * @param format        引擎
     * @param name          标签名
     * @param inlineNode     行内标签扩展
     */
    registerInlineNode(format: any, name: any, inlineNode: any): void;
}
