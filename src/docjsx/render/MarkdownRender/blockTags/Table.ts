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


    isTh(tr: PseudoNode){
        return tr.childPseudoNodes.reduce((bool, td)=>{
            return bool && td.tagName == 'th'
        }, true)
    }

    async tableTdRender(tds:PseudoNode[], render: MarkdownRender): Promise<string>{
        return `|${await Promise.all(tds.map(async td=>{
            if(td.tagName == 'td'){
                return `${await render.renderInlineNodes(td.childPseudoNodes)}`
            }
        })).then(strings=> strings.join("|"))}|`
    }

    async tableThRender(ths: PseudoNode[], render: MarkdownRender): Promise<string>{
        return `|${await Promise.all(ths.map(async th => {
            if(th.tagName == 'th'){
                return `${await render.renderInlineNodes(th.childPseudoNodes)}`
            }
        })).then(strings=> strings.join("|"))}|
|${ths.map(th => '----').join("|")}|`
    }

    async tableTrRender(trs: PseudoNode[], render: MarkdownRender): Promise<string>{
        return Promise.all(trs.map(tr => {
            if(tr.tagName == 'tr'){
                if(this.isTh(tr)){
                    return this.tableThRender(tr.childPseudoNodes, render)
                } else {
                    return this.tableTdRender(tr.childPseudoNodes, render)
                }
            } else {
                return ''
            }
        })).then(strings => strings.join("\n"))
    }

    async render(render: MarkdownRender){
        var str = `${
            await this.tableTrRender(this.childPseudoNodes, render)
            }`;
        return str;
    }
}