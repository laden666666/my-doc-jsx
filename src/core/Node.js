/**
 * 一个组成tree的节点。
 */
class Node{
    /**
     * @param content           节点对应的虚拟dom
     * @param tree              对应的tree结构
     * @param parentNode        节点的父节点
     */
    constructor(content, tree=null, parentNode=null){
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

    //设置tree
    setTree(tree){
        this.tree = tree;
    }

    //设置parentNode
    setParentNode(parentNode){
        this.parentNode = parentNode;
    }
}

export default Node;
