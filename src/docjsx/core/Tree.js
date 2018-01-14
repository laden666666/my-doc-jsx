/**
 * 整个doc生成的树
 */
class Tree{
    constructor(root){
        this.root = root;
        root.setTree(this);
        this.currentNode = this.root;
    }
}

export default Tree;