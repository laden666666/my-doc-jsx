/**
 * Created by njz on 2017/3/25.
 */
import {BaseRender} from '../../core/BaseRenderTools';
import { Tree } from '../../core/Tree';
import { BlockNode } from '../../core/BlockNode';
import { InlineNode } from '../../core/InlineNode';
import { Node } from '../../core/Node';
import { PseudoNode } from '../../core/PseudoNode';
import { Doc } from './BlockNodes/Doc';
// import H1 from './BlockNodes/H1';
// import H2 from './BlockNodes/H2';
// import H3 from './BlockNodes/H3';
// import H4 from './BlockNodes/H4';
// import Table from './BlockNodes/Table';
// import P from './BlockNodes/P';
// import Nav from './BlockNodes/Nav';
import { Blockquote } from './BlockNodes/Blockquote';
// import Code from './BlockNodes/Code';
// import Li from './BlockNodes/Li';
// import Img from './BlockNodes/Img';

// import Strong from './inlineNodes/Strong';
// import A from './inlineNodes/A';
// import Span from './inlineNodes/Span';
// import String from './inlineNodes/String';

export class HTMLRender extends BaseRender{
    constructor(){
        super()
        this.$blockNodeMap = {
            // p: P,
            // h1: H1,
            // h2: H2,
            // h3: H3,
            // h4: H4,
            // table: Table,
            doc: Doc,
            // nav: Nav,
            blockquote: Blockquote,
            // code: Code,
            // li: Li,
            // img: Img,
        }
        this.$inlineNodeMap = {
            // strong: Strong,
            // string: String,
            // span: Span,
            // a: A,
        }
    }

    $renderTree(tree: Tree): string{
        return this.renderChildBlockNodes([tree.root]);
    }

    renderChildBlockNodes(blockNodeList: Node[]): string{
        return blockNodeList.map(node=> {
            const blockNode = new (this.getBlockNode(node.tagName) || BlockNode)(node)
            return blockNode.render(this)
        }).join('')
    }

    renderChildInlineNodes(inlineNodeList: PseudoNode[]): string{
        return inlineNodeList.map(pseudoNode=> {
            const inlineNode = new (this.getInlineNode(pseudoNode.tagName) || InlineNode)(pseudoNode)
            return inlineNode.render(this)
        }).join('')
    }
}

export default HTMLRender;