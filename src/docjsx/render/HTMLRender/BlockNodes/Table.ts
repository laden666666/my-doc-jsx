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

    tableTdRender(tds: PseudoNode[], render: HTMLRender): Promise<string>{
        return Promise.all(tds.map(async td=>{
            if(td.tagName == 'td'){
                return `<td class="mydoc_td">${await render.renderInlineNodes(td.childPseudoNodes)}</td>`
            } else if(td.tagName == 'th'){
                return `<th class="mydoc_th">${await render.renderInlineNodes(td.childPseudoNodes)}</th>`
            } else {
                return ''
            }
        })).then(strings=> strings.join(""))
    }

    tableTrRender(trs: PseudoNode[], render: HTMLRender): Promise<string>{
        return Promise.all(trs.map(async tr=>{
            if(tr.tagName == 'tr'){
                return `<tr class="mydoc_tr">${await this.tableTdRender(tr.childPseudoNodes, render)}</tr>`
            } else {
                return ''
            }
        })).then(strings=> strings.join(""))
    }

    async render(render: HTMLRender): Promise<string>{
        render.setStyle('table', style)
        var str = `<table class="mydoc_table">${
            await this.tableTrRender(this.childPseudoNodes, render)
            }</table>`;
        return str;
    }
}