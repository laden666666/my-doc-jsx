/**
 * Created by njz on 2017/3/26.
 */
import { InlineNode } from '../../../core/InlineNode';
import { MarkdownRender } from '../';
export declare class Span extends InlineNode<MarkdownRender> {
    render(render: MarkdownRender): string;
}
