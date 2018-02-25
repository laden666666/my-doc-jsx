/**
 * Created by njz on 2017/3/26.
 */
import { BlockNode } from '../../../core/BlockNode';
import { MarkdownRender } from '../';
export declare class Code extends BlockNode<MarkdownRender> {
    constructor(node: any);
    render(render: MarkdownRender): string;
}
