import { InlineNode } from './docjsx/core/InlineNode';
import { BlockNode } from './docjsx/core/BlockNode';
import { BasePlugin } from './docjsx/core/BasePlugin';
import { BaseRender } from './docjsx/core/BaseRenderTools';
import HTMLRender from './docjsx/render/HTMLRender';
import MarkdownRender from './docjsx/render/MarkdownRender';
import * as util from './docjsx/util';
declare var exportModule: {
    InlineNode: typeof InlineNode;
    BlockNode: typeof BlockNode;
    BaseRender: typeof BaseRender;
    BasePlugin: typeof BasePlugin;
    convert: (jsxStr: string, option?: {
        format: string;
    }) => any;
    usePlugin: (plugin: any) => void;
    util: typeof util;
    HTMLRender: typeof HTMLRender;
    MarkdownRender: typeof MarkdownRender;
};
export default exportModule;
