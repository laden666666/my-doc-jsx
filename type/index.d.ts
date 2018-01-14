export interface Node{
    parentNode: Node
    childNodes: Node[]
}

export interface Tree{
    root: Node;
}


export interface VNode{
    props: {
        children: Array<VNode | string> | VNode | string
    },
    type: string
}

export declare abstract class BasePlugin{
    $registerBlockTag(format: 'HTML' | 'MARKDOWN', name: string, blockTag: BlockTag)
    $registerInlineTag(format: 'HTML' | 'MARKDOWN', name: string, inlineTag: InlineTag)
}

export declare abstract class BaseRenderTools{
    $registerBlockTag(tagName: string, blockTag: BlockTag);
    $registerInlineTag(tagName: string, inlineTag: InlineTag);
    $getAllBlockTags(): BlockTag[]
    $getAllInlineTags(): InlineTag[]
}

export declare abstract class BlockTag extends Node{
    priority: number;
    renderTools:BaseRenderTools;
    blockTagTree: Tree;

    abstract render()
    $renderChildren(children: Node[]);
    $getChildrenText(): Node[];
}

export declare abstract class InlineTag extends Node{
    renderTools:BaseRenderTools;

    abstract render()
    $getChildrenText();
}