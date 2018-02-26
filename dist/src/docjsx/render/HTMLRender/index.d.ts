/**
 * Created by njz on 2017/3/25.
 */
import { BaseRender } from '../../core/BaseRenderTools';
import { Tree } from '../../core/Tree';
import { Node } from '../../core/Node';
import { PseudoNode } from '../../core/PseudoNode';
export declare class HTMLRender extends BaseRender {
    private styleMap;
    constructor();
    $renderTree(tree: Tree): string;
    setStyle(tagName: string, styleText: string): void;
    renderStyle(): string;
    renderBlockNodes(blockNodeList: Node[]): string;
    renderInlineNodes(inlineNodeList: PseudoNode[]): string;
}
export default HTMLRender;
