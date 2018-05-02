import {Node} from './Node';
import {Tree} from './Tree';
import {InlineNode} from './InlineNode';
import {BaseRender} from './BaseRenderTools';
/**
 * 基础标签，所有标签都是继承该标签的。这是一个抽象类
 */
export class BlockNode<T extends BaseRender> extends Node{

    //用于标记类
    static $$NodeClassID = 'BlockNode'

    /**
     * 块级标签优先级
     */
    public priority: number

    constructor(node: Node){
        super(node['content'], node.tree, node.parentNode);
        //块级标签优先级
        this.priority = 0;
    }

    /**
     * 渲染函数，这个是需要继承的虚函数
     * @returns {string}                渲染后的字符串
     */
    render(renderTools: T){
        console.warn("不支持渲染此块标签：" + this.tagName);
        return "";
    }
}