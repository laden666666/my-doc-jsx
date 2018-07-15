/**
 * Created by njz on 2017/4/17.
 */
import { BlockNode } from '../../../core/BlockNode';
import { MarkdownRender } from '../';
export declare class Img extends BlockNode<MarkdownRender> {
    constructor(node: any);
    render(): Promise<string>;
}
