/**
 * 整个blog生成的树
 */
class Tree{
    constructor(root){
        this.root = root;
        root.setTree(this);
        this.currentNode = this.root;
    }

    //增加节点，这里增加的是快级元素生成的节点，不允许增加行内元素节点
    append(node){
        if(this.currentNode.priority > node.priority){
            this.currentNode.appendChild(node);
            this.currentNode = node;
            node.tree = this;
        } else if(this.currentNode.priority == node.priority){
            this.currentNode.parentNode.appendChild(node);
            this.currentNode = node;
            node.tree = this;
        } else if(this.currentNode.priority > node.priority){
            this.currentNode = this.currentNode.parentNode;
            this.append(node)
        }
    }
}

export default Tree;