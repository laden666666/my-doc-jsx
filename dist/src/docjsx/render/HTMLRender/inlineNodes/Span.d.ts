/**
 * Created by njz on 2017/3/26.
 */
import { InlineNode } from '../../../core/InlineNode';
import { HTMLRender } from '../';
export declare class Span extends InlineNode<HTMLRender> {
    render(render: HTMLRender): string;
}
