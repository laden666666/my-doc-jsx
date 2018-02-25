/**
 * Created by njz on 2017/3/25.
 */
import { BaseRender } from '../../core/BaseRenderTools';
import { Tree } from '../../core/Tree';
import { Node } from '../../core/Node';
import { PseudoNode } from '../../core/PseudoNode';
export declare class HTMLRender extends BaseRender {
    constructor();
    $renderTree(tree: Tree): string;
    renderChildBlockNodes(blockNodeList: Node[]): string;
    renderChildInlineNodes(inlineNodeList: PseudoNode[]): string;
}
export default HTMLRender;
