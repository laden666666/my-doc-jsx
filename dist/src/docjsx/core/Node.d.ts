import { Tree } from './Tree';
import { PseudoNode } from './PseudoNode';
/**
 * 一个组成tree的节点。
 */
export declare class Node {
    /**
     * 父节点
     * @type {Node}
     */
    parentNode: Node;
    /**
     * 子节点
     * @type {Node[]}
     * @memberof Node
     */
    childNodes: Node[];
    /**
     * 子伪节点
     * @type {Node[]}
     * @memberof Node
     */
    childPseudoNodes: PseudoNode[];
    /**
     * 正颗树
     * @type {Tree}
     * @memberof Node
     */
    tree: Tree;
    /**
     * react的虚拟dom对象，私有。不对外开放
     */
    protected content: any;
    /**
     * @param content           节点对应的虚拟dom
     * @param tree              对应的tree结构
     * @param parentNode        节点的父节点
     */
    constructor(content: any, tree: Tree, parentNode: Node);
    appendChild(node: any): void;
    readonly props: any;
    readonly tagName: any;
    getText(): string;
}
