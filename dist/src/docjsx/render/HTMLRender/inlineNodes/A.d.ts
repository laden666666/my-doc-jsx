/**
 * Created by njz on 2017/4/17.
 */
import { InlineNode } from '../../../core/InlineNode';
import { HTMLRender } from '../';
export declare class A extends InlineNode<HTMLRender> {
    render(render: HTMLRender): Promise<string>;
}
