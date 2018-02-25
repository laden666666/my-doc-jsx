/**
 * Created by njz on 2017/3/25.
 */
import {BaseRender} from '../../core/BaseRenderTools';
import { Tree } from '../../core/Tree';
import { BlockNode } from '../../core/BlockNode';
import { InlineNode } from '../../core/InlineNode';
import { Node } from '../../core/Node';
import { PseudoNode } from '../../core/PseudoNode';
import {Doc} from './blockTags/Doc';
import {H1} from './blockTags/H1';
import {H2} from './blockTags/H2';
import {H3} from './blockTags/H3';
import {H4} from './blockTags/H4';
import { P } from './blockTags/P';
import { Table } from './blockTags/Table';
import { Nav } from './blockTags/Nav';
import { Blockquote } from './blockTags/Blockquote';
import { Code } from './blockTags/Code';
import { Li } from './blockTags/Li';
import { Img } from './blockTags/Img';

import { Strong } from './inlineTags/Strong';
import { A } from './inlineTags/A';
import { Span } from './inlineTags/Span';
import { String } from './inlineTags/String';

export class MarkdownRender extends BaseRender{
    constructor(){
        super()
        
        Object.entries({
            p: P,
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            table: Table,
            doc: Doc,
            nav: Nav,
            blockquote: Blockquote,
            code: Code,
            li: Li,
            img: Img,
        }).map(keyValue=>{
            this.registerBlockNode(keyValue[0], keyValue[1])
        })
        Object.entries({
            strong: Strong,
            string: String,
            span: Span,
            a: A,
        }).map(keyValue=>{
            this.registerInlineNode(keyValue[0], keyValue[1])
        })
    }

    $renderTree(tree: Tree): string{
        return this.renderChildBlockNodes([tree.root]);
    }

    renderChildBlockNodes(blockNodeList: Node[]): string{
        return blockNodeList.map(node=> {
            if(node instanceof BlockNode){
                return node.render(this)
            } else {
                return '';
            }
            
        }).join('')
    }

    renderChildInlineNodes(inlineNodeList: PseudoNode[]): string{
        return inlineNodeList.map(pseudoNode=> {
            const inlineNode = new (this.getInlineNode(pseudoNode.tagName) || InlineNode)(pseudoNode)
            return inlineNode.render(this)
        }).join('')
    }
}

export default MarkdownRender