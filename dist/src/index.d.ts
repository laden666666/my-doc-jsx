import { InlineNode } from './docjsx/core/InlineNode';
import { BlockNode } from './docjsx/core/BlockNode';
import { BasePlugin } from './docjsx/core/BasePlugin';
import { BaseRender } from './docjsx/core/BaseRenderTools';
import { Node } from './docjsx/core/Node';
import HTMLRender from './docjsx/render/HTMLRender';
import MarkdownRender from './docjsx/render/MarkdownRender';
import * as util from './docjsx/util';
/**
 * 使用usePlugin函数注册插件
 * @param plugin            注册的插件
 */
declare function usePlugin(plugin: any): void;
/**
 * 转换函数，将jsx字符串转换为指定的文档格式输出
 * @param jsxStr            jsx字符串
 * @param option            转换的配置。主要配置有：format，转换的格式配置，支持“HTML”和“MARKDOWN”两种
 * @returns {convertedDoc}  转换好的指定格式的文档
 */
declare function convert(jsxStr: string, option?: {
    format: string;
}): any;
/**
 * 转换函数，将jsx字符串转换为指定的文档格式输出
 * @param jsxStr            jsx字符串
 * @param option            转换的配置。主要配置有：format，转换的格式配置，支持“HTML”和“MARKDOWN”两种
 * @returns {convertedDoc}  转换好的指定格式的文档
 */
declare function jsxStr2Nodes(jsxStr: string, render: BaseRender, option: any): Node[];
export { InlineNode, BlockNode, BaseRender, BasePlugin, convert, usePlugin, util, HTMLRender, MarkdownRender, jsxStr2Nodes };
declare const _default: {
    InlineNode: typeof InlineNode;
    BlockNode: typeof BlockNode;
    BaseRender: typeof BaseRender;
    BasePlugin: typeof BasePlugin;
    convert: typeof convert;
    usePlugin: typeof usePlugin;
    util: typeof util;
    HTMLRender: typeof HTMLRender;
    MarkdownRender: typeof MarkdownRender;
    jsxStr2Nodes: typeof jsxStr2Nodes;
};
export default _default;
