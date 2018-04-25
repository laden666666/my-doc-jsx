import { Tree } from './Tree';
import { BaseRender } from './BaseRenderTools';
/**
 * 转换函数，将jsx字符串转换为指定的文档格式输出
 * @param jsxStr            jsx字符串
 * @param option            转换的配置。主要配置有：format，转换的格式配置，支持“HTML”和“MARKDOWN”两种
 * @returns {convertedDoc}  转换好的指定格式的文档
 */
export default function (jsxStr: string, render: BaseRender, option: any): Tree;
