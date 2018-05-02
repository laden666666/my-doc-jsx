import { Node } from './Node';
export declare class PseudoNode {
    static $$NodeClassID: string;
    /**
     * 父节点
     * @type {Node}
     */
    node: Node;
    /**
     * 父节点
     * @type {Node}
     */
    parentPseudoNode: PseudoNode;
    /**
     * 子节点
     * @type {Node[]}
     * @memberof Node
     */
    childPseudoNodes: PseudoNode[];
    /**
     * react的虚拟dom对象，私有。不对外开放
     */
    protected content: any;
    constructor(content: any, node: Node, parentPseudoNode: PseudoNode);
    appendChild(node: PseudoNode): void;
    readonly props: any;
    readonly tagName: any;
    getText(): string;
}
