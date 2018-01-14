import Node from './Node';
import Tree from './Tree';
/**
 * 基础标签，所有标签都是继承该标签的。这是一个抽象类
 */
class BlockTag extends Node{
    constructor(renderTools, content, tree, parentNode=null){
        super(content, tree, parentNode);
        //块级标签优先级
        this.priority = 0;
        //文本数组，就是属于这个块级标签中的行内标签集合
        this.blockTagTree = new Tree(new Node());
        //输出工具
        this.renderTools = renderTools;
    }

    /**
     * 渲染函数，这个是需要继承的虚函数
     * @returns {string}                渲染后的字符串
     */
    render(){
        console.warn("不支持渲染此块标签：" + this.content.type);
        return "";
    }

    /**
     * 私有函数，供BaseRenderTools将jsx解析后的tree(根据优先级从新创建的tree)对象注入到tag对象中
     * @param blockTagTree
     */
    _setBlockTagTree(blockTagTree){
        this.blockTagTree = blockTagTree;
    }

    /**
     * 系统方法，渲染后续节点
     * @param children
     * @returns {*}
     */
    $renderChildren(children){
        return this.renderTools.$renderChildren(children);
    }

    /**
     * 系统方法，获取当前节点的text文本
     * @param children
     * @returns {*}
     */
    $getChildrenText(){
        return this.blockTagTree.root.childNodes;
    }
}

export default BlockTag;