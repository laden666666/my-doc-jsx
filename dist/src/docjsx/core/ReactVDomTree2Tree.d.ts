/**
 * @file
 * 将react虚拟DOM树，转为一颗Tree对象
 */
import { BaseRender } from './BaseRenderTools';
import { Tree } from './Tree';
/**
 * 将react的虚拟dom树转为Tree对象
 * @param {any} doc
 * @param {BaseRenderTools} renderTools
 * @returns {Tree}
 */
export declare function reactVDomTree2Tree(doc: any, renderTools: BaseRender): Tree;
