/**
 * @file
 * 将react虚拟DOM树，转为一颗Tree对象
 */

import { BaseRender } from './BaseRenderTools'
import { Tree } from './Tree';
import { BlockNode } from './BlockNode';
import { Node } from './Node';
import { PseudoNode } from './PseudoNode';

//增加节点，这里增加的是快级元素生成的节点，不允许增加行内元素节点
function appendBlockChildren(tree: Tree, node: BlockNode<any>){
    if(tree.currentNode instanceof BlockNode){
        if(tree.currentNode.priority > node.priority){
            tree.currentNode.appendChild(node);
            node.parentNode = tree.currentNode
            tree.currentNode = node;
            node.tree = tree;
        } else if(tree.currentNode.priority == node.priority){
            tree.currentNode.parentNode.appendChild(node);
            tree.currentNode = node;
            node.tree = tree;
        } else if(tree.currentNode.priority < node.priority){
            tree.currentNode = tree.currentNode.parentNode;
            appendBlockChildren(tree, node);
        }
    }
}


//增加节点，这里增加的是快级元素生成的节点，不允许增加行内元素节点
function appendChildren(node: BlockNode<any>, parentNode: PseudoNode | Node){
    var children: any[] = []
    //将props.children不是数组的情况，都改为数组，这样方便后续处理
    if(node.props.children && node.props.children.length != null && typeof node.props.children !== 'string'){
        children = Array.from(node.props.children)
    } else if(node.props.children) {
        children = [node.props.children]
    }

    children.forEach(vdom=>{
        var subNode = new PseudoNode(vdom, node, parentNode instanceof PseudoNode ? parentNode : null)
        
        node.childPseudoNodes.push(subNode)
        appendChildren(node, subNode)
    })
}

function createDocTree(doc, renderTools: BaseRender): Tree{
    //因为props是只读字段，故采用...使其变为可写字段
    doc = {...doc, props: {...doc.props}}
    if(doc.props.children){
        //将props.children不是数组的情况，都改为数组，这样方便后续处理
        if(!Array.isArray(doc.props.children)){
            doc.props.children = [doc.props.children];
        }

        //获取doc根元素，将其封装为Node对象
        var DocClass = renderTools.getBlockNode(doc.type) || BlockNode
        var domTree = new Tree(new DocClass(new Node(doc, null ,null)));
        domTree.root.tree = domTree

        //将其鞥这为块级的Node对象
        doc.props.children.forEach((item)=>{
            var ItemClass =  renderTools.getBlockNode(item.type) || BlockNode
            var tagInstance = new ItemClass(new Node(item, domTree, null));
            appendBlockChildren(domTree, tagInstance);
            appendChildren(tagInstance, tagInstance)
        })
    }
    return domTree;
}

/**
 * 将react的虚拟dom树转为Tree对象
 * @param {any} doc 
 * @param {BaseRenderTools} renderTools 
 * @returns {Tree} 
 */
export function reactVDomTree2Tree(doc, renderTools: BaseRender): Tree{
    //检验是否是虚拟dom
    if(!doc || !doc.props || doc.type != "doc"){
        throw new TypeError("doc is invalid Virtual Dom");
    }

    return createDocTree(doc, renderTools);
}