/**
 * Created by njz on 2018/2/15.
 */
import BlockTag from '../../../core/BlockTag'

class Table extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    tableTdRender(tds){
        return tds.map(td=>{
            if(td.content.type == 'td'){
                return `<td class="mydoc_td">${this.$renderChildren(td.childNodes)}</td>`
            } else if(td.content.type == 'th'){
                return `<th class="mydoc_th">${this.$renderChildren(td.childNodes)}</th>`
            } else {
                return ''
            }
        }).join("")
    }

    tableTrRender(trs){
        return trs.map(tr=>{
            if(tr.content.type == 'tr'){
                return `<tr class="mydoc_tr">${this.tableTdRender(tr.childNodes)}</tr>`
            } else {
                return ''
            }
        }).join("")
    }

    render(){
        var str = `<table class="mydoc_table">${
            this.tableTrRender(this.$getChildrenText())
            }</table>`;
        return str;
    }
}

export default Table;