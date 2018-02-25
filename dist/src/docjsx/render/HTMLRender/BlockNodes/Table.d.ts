/**
 * Created by njz on 2018/2/15.
 */
import { BlockNode } from '../../../core/BlockNode';
import { PseudoNode } from '../../../core/PseudoNode';
import { HTMLRender } from '../';
export declare class Table extends BlockNode<HTMLRender> {
    constructor(node: any);
    tableTdRender(tds: PseudoNode[], render: HTMLRender): string;
    tableTrRender(trs: PseudoNode[], render: HTMLRender): string;
    render(render: HTMLRender): string;
}
