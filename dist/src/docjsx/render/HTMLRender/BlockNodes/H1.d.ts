/**
 * Created by njz on 2017/3/26.
 */
import { BlockNode } from '../../../core/BlockNode';
import { HTMLRender } from '../';
export declare class H1 extends BlockNode<HTMLRender> {
    constructor(node: any);
    render(render: HTMLRender): Promise<string>;
}
