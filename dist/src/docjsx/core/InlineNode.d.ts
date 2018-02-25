import { PseudoNode } from './PseudoNode';
import { BaseRender } from './BaseRenderTools';
/**
 * 基础标签,所有标签都是继承继承标签的
 */
export declare class InlineNode<T extends BaseRender> extends PseudoNode {
    constructor(node?: PseudoNode);
    /**
     * 渲染函数，这个是需要继承的虚函数
     * @returns {string}                渲染后的字符串
     */
    render(renderTools: T): string;
}
