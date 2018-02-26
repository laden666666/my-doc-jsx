/**
 * Created by njz on 2018/2/15.
 */
import {BlockNode} from '../../../core/BlockNode'
import {PseudoNode} from '../../../core/PseudoNode'
import {HTMLRender} from '../'
const style = require('./Table.css')

export class Table extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    tableTdRender(tds: PseudoNode[], render: HTMLRender){
        return tds.map(td=>{
            if(td.tagName == 'td'){
                return `<td class="mydoc_td">${render.renderInlineNodes(td.childPseudoNodes)}</td>`
            } else if(td.tagName == 'th'){
                return `<th class="mydoc_th">${render.renderInlineNodes(td.childPseudoNodes)}</th>`
            } else {
                return ''
            }
        }).join("")
    }

    tableTrRender(trs: PseudoNode[], render: HTMLRender){
        return trs.map(tr=>{
            if(tr.tagName == 'tr'){
                return `<tr class="mydoc_tr">${this.tableTdRender(tr.childPseudoNodes, render)}</tr>`
            } else {
                return ''
            }
        }).join("")
    }

    render(render: HTMLRender){
        render.setStyle('table', style)
        var str = `<table class="mydoc_table">${
            this.tableTrRender(this.childPseudoNodes, render)
            }</table>`;
        return str;
    }
}