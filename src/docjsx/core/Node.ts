import {Tree} from './Tree'
import {PseudoNode} from './PseudoNode'

/**
 * 一个组成tree的节点。
 */
export class Node{

    /**
     * 父节点
     * @type {Node}
     */
    parentNode: Node

    /**
     * 子节点
     * @type {Node[]}
     * @memberof Node
     */
    childNodes: Node[]

    /**
     * 子伪节点
     * @type {Node[]}
     * @memberof Node
     */
    childPseudoNodes: PseudoNode[]

    /**
     * 正颗树
     * @type {Tree}
     * @memberof Node
     */
    tree: Tree

    /**
     * react的虚拟dom对象，私有。不对外开放
     */
    private content: any

    /**
     * @param content           节点对应的虚拟dom
     * @param tree              对应的tree结构
     * @param parentNode        节点的父节点
     */
    constructor(content: any, tree: Tree , parentNode: Node){
        //父节点
        this.parentNode = parentNode;
        //节点对应的dom参数
        this.content = content;
        //节点的子节点
        this.childNodes = [];
        //树节点
        this.tree = tree;
    }

    //增加子节点
    appendChild(node){
        this.childNodes.push(node);
        node.parentNode = this;
    }

    //属性
    get props(){
        return (this.content && this.content.props) || {}
    }

    //标签名称
    get tagName(){
        return (this.content && this.content && this.content.type) || ""
    }
}