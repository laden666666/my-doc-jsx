import { Node } from './Node';
/**
 * 整个doc生成的树
 */
export declare class Tree {
    /**
     * 根节点
     */
    root: Node;
    /**
     * 当前解析的节点
     * @type {Node}
     * @memberof Tree
     */
    currentNode: Node;
    constructor(root: any);
}
