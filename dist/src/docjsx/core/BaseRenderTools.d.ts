import { BlockNode } from './BlockNode';
import { InlineNode } from './InlineNode';
import { Tree } from './Tree';
import { Node } from './Node';
import { PseudoNode } from './PseudoNode';
import { BasePlugin } from './BasePlugin';
export interface BlockNodeClass<T extends BaseRender> {
    new (node: Node): BlockNode<T>;
}
export interface InlineNodeClass<T extends BaseRender> {
    new (node: PseudoNode): InlineNode<T>;
}
/**
 * Created by njz on 17/2/28.
 * 渲染平台的基础类。因为同一个xml(jsx)博客会渲染为不同的形式平台上,所以需要提供不同形式的博客渲染类,故采用策略模式。
 * 此为一个渲染平台策略的基础类,每个渲染策略都要继承这个类,并注册到渲染策略表中,由page标签统一配置渲染策略。
 * 每个标签都应该将他的渲染策略注册到
 *
 * jsx要求不可以标签嵌套，即使嵌套了渲染的时候也不会也不允许渲染子元素，这主要是吸取了markdown的优点，即不允许嵌套
 * 每个标签都有优先级，渲染的时候，会自动根据优先级渲染出一颗树，优先级低的标签会自动成为优先级高的标签的子元素。同时
 * 又扩充了markdown不支持的扩张性，使其可以输出更加丰富的内容
 *
 * 虚标签是供block标签内部渲染的标签，并不会被放到tree中。inlineNode是特殊的虚标签，他会被renderLine处理。inlineNode和其他虚标签一样
 * ，必须放到block标签中，否则会被忽略掉
 */
export declare abstract class BaseRender {
    $blockNodeMap: {
        [name: string]: BlockNodeClass<any>;
    };
    $inlineNodeMap: {
        [name: string]: InlineNodeClass<any>;
    };
    abstract $renderTree(tree: Tree): any;
    abstract renderChildBlockNodes(blockNodeList: Node[]): any;
    abstract renderChildInlineNodes(inlineNodeList: PseudoNode[]): any;
    registerBlockNode(nodeName: any, fn: BlockNodeClass<this>): void;
    registerInlineNode(nodeName: any, fn: InlineNodeClass<this>): void;
    getBlockNode(nodeName: any): BlockNodeClass<this>;
    getInlineNode(nodeName: any): InlineNodeClass<this>;
    getAllBlockNodes(): {
        name: string;
        plugin: BlockNodeClass<any>;
    }[];
    getAllInlineNodes(): {
        name: string;
        plugin: InlineNodeClass<any>;
    }[];
    $usePlugin(plugins: BasePlugin): void;
}
