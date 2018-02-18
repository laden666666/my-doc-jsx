export interface Node{
    parentNode: Node
    childNodes: Node[]
    tree: Tree;
    props: {
        [string]: any
    }
}

export interface Tree{
    root: Node;
}

export declare abstract class BasePlugin{
    $registerBlockTag(format: 'HTML' | 'MARKDOWN', name: string, blockTag: BlockTag)
    $registerInlineTag(format: 'HTML' | 'MARKDOWN', name: string, inlineTag: InlineTag)
}

export declare abstract class BaseRenderTools{
    $registerBlockTag(tagName: string, blockTag: BlockTag);
    $registerInlineTag(tagName: string, inlineTag: InlineTag);
    $getAllBlockTags(): Array<{name: string, plugin: BlockTag}>
    $getAllInlineTags(): Array<{name: string, plugin: InlineTag}>
}

export declare abstract class BlockTag extends Node{
    priority: number;
    renderTools:BaseRenderTools;
    blockTagTree: Tree;

    abstract render(): string;
    $renderChildren(children: Array<BlockTag | InlineTag>);
    $getChildrenText(node?: Node): Node[];
}

export declare abstract class InlineTag extends Node{
    renderTools:BaseRenderTools;
    abstract render(): string;
}

export declare function usePlugin(plugin: BasePlugin): void;

export declare function convert(jsxStr:string, option:{format: 'HTML' | 'MARKDOWN'}): string;

export declare const util: {
    escapeHTML(htmlString: string): string
}