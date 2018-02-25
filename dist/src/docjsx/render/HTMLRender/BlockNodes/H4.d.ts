/**
 * Created by njz on 2018/2/14.
 */
import { BlockNode } from '../../../core/BlockNode';
import { HTMLRender } from '../';
export declare class H4 extends BlockNode<HTMLRender> {
    constructor(node: any);
    render(render: HTMLRender): string;
}
