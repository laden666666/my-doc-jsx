/**
 * Created by njz on 2018/2/15.
 */
import { BlockNode } from '../../../core/BlockNode';
import { PseudoNode } from '../../../core/PseudoNode';
import { MarkdownRender } from '../';
export declare class Table extends BlockNode<MarkdownRender> {
    constructor(node: any);
    isTh(tr: PseudoNode): boolean;
    tableTdRender(tds: PseudoNode[], render: MarkdownRender): string;
    tableThRender(ths: PseudoNode[], render: MarkdownRender): string;
    tableTrRender(trs: PseudoNode[], render: MarkdownRender): string;
    render(render: MarkdownRender): string;
}
