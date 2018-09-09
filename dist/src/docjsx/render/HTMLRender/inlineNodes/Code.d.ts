/**
 * Created by njz on 2017/3/26.
 */
import { InlineNode } from '../../../core/InlineNode';
import { HTMLRender } from '../';
export declare class Code extends InlineNode<HTMLRender> {
    render(render: HTMLRender): Promise<string>;
}
