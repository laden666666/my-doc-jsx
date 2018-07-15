import {PseudoNode} from './PseudoNode';
import {Tree} from './Tree';

import {BaseRender} from './BaseRenderTools';

/**
 * 基础标签,所有标签都是继承继承标签的
 */
export class InlineNode<T extends BaseRender> extends PseudoNode{

    //用于标记类
    static $$NodeClassID = 'InlineNode'

    constructor(node: PseudoNode = null){
        super(node['content'], node.node, node.parentPseudoNode);
        this.childPseudoNodes = node.childPseudoNodes
    }

    /**
     * 渲染函数，这个是需要继承的虚函数
     * @returns {Promise<string>}                渲染后的字符串
     */
    render(renderTools: T): Promise<string>{
        console.warn("不支持渲染此行内标签：" + this.tagName);
        return Promise.resolve("");
    }
}