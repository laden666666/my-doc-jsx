/**
 * Created by njz on 2018/2/15.
 */
import {BlockNode} from '../../../core/BlockNode'
import {PseudoNode} from '../../../core/PseudoNode'
import {MarkdownRender} from '../'

export class Table extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }


    isTh(tr){
        return tr.childNodes.reduce((bool, td)=>{
            return bool && td.content.type == 'th'
        }, true)
    }

    tableTdRender(tds:PseudoNode[], render: MarkdownRender){
        return `|${tds.map(td=>{
            if(td.tagName == 'td'){
                return `${render.renderChildInlineNodes(td.childPseudoNodes)}`
            }
        }).join("|")}|`
    }

    tableThRender(ths: PseudoNode[], render: MarkdownRender){
        return `|${ths.map(th => {
            if(th.tagName == 'th'){
                return `${render.renderChildInlineNodes(th.childPseudoNodes)}`
            }
        }).join("|")}|
|${ths.map(th => '----').join("|")}|`
    }

tableTrRender(trs: PseudoNode[], render: MarkdownRender){
        return trs.map(tr => {
            if(tr.tagName == 'tr'){
                if(this.isTh(tr)){
                    return this.tableThRender(tr.childPseudoNodes, render)
                } else {
                    return this.tableTdRender(tr.childPseudoNodes, render)
                }
            } else {
                return ''
            }
        }).join("\n")
    }

    render(render: MarkdownRender){
        var str = `${
            this.tableTrRender(this.childPseudoNodes, render)
            }`;
        return str;
    }
}