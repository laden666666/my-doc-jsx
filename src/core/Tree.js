/**
 * Created by njz on 2017/3/26.
 */
class Tree{
    constructor(root=null){
        this.root = new Node(root, Infinity);
        this.currentNode = this.root;
    }

    append(content, value){
        var node = new Node(content, value);
        if(this.currentNode.value > value){
            this.currentNode.append(node);
            this.currentNode = node;
        } else if(this.currentNode.value == value){
            this.currentNode.getParentNode().append(node);
            this.currentNode = node;
        } else if(this.currentNode.value > value){
            this.currentNode = this.currentNode.getParentNode();
            this.append(content, value)
        }
    }
}

class Node{
    constructor(content, value, parentNode=null){
        this.parentNode = parentNode;
        this.childNodes = [];
        this.content = content;
        this.value = value;
    }

    append(node){
        this.childNodes.push(node);
        node.parentNode = this;
    }

    getLastChildNode(){
        return this.childNodes.length ? this.childNodes[this.childNodes.length - 1] : null;
    }

    getParentNode(){
        return this.getParentNode;
    }
}

export default Tree;