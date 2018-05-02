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
        
        let blockNodeMap = {
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
        }
        for(let key in blockNodeMap){
            this.registerBlockNode(key, blockNodeMap[key])
        }
        
        let inlineNodeMap = {
            strong: Strong,
            string: String,
            span: Span,
            a: A,
        }
        for(let key in inlineNodeMap){
            this.registerInlineNode(key, inlineNodeMap[key])
        }
    }

    $renderTree(tree: Tree): string{
        return this.renderBlockNodes([tree.root]);
    }

    renderBlockNodes(blockNodeList: Node[]): string{
        return blockNodeList.map(node=> {
            if(node && node.constructor['$$NodeClassID'] === BlockNode.$$NodeClassID){
                return (node as BlockNode<any>).render(this)
            } else {
                return '';
            }
            
        }).join('')
    }

    renderInlineNodes(inlineNodeList: PseudoNode[]): string{
        return inlineNodeList.map(pseudoNode=> {
            const inlineNode = new (this.getInlineNode(pseudoNode.tagName) || InlineNode)(pseudoNode)
            return inlineNode.render(this)
        }).join('')
    }
}

export default MarkdownRender