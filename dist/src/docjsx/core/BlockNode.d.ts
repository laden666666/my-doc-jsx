import { Node } from './Node';
import { BaseRender } from './BaseRenderTools';
/**
 * 基础标签，所有标签都是继承该标签的。这是一个抽象类
 */
export declare class BlockNode<T extends BaseRender> extends Node {
    /**
     * 块级标签优先级
     */
    priority: number;
    constructor(node: Node);
    /**
     * 渲染函数，这个是需要继承的虚函数
     * @returns {string}                渲染后的字符串
     */
    render(renderTools: T): string;
}
