/**
 * Created by njz on 2018/2/15.
 */
import { BlockNode } from '../../../core/BlockNode';
import { PseudoNode } from '../../../core/PseudoNode';
import { MarkdownRender } from '../';
export declare class Table extends BlockNode<MarkdownRender> {
    constructor(node: any);
    isTh(tr: PseudoNode): boolean;
    tableTdRender(tds: PseudoNode[], render: MarkdownRender): Promise<string>;
    tableThRender(ths: PseudoNode[], render: MarkdownRender): Promise<string>;
    tableTrRender(trs: PseudoNode[], render: MarkdownRender): Promise<string>;
    render(render: MarkdownRender): Promise<string>;
}
