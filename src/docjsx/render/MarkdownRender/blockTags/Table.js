/**
 * Created by njz on 2018/2/15.
 */
import BlockTag from '../../../core/BlockTag'

class Table extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }


    isTh(tr){
        return tr.childNodes.reduce((bool, td)=>{
            return bool && td.content.type == 'th'
        }, true)
    }

    tableTdRender(tds){
        return `|${tds.map(td=>{
            if(td.content.type == 'td'){
                return `${this.$renderChildren(td.childNodes)}`
            }
        }).join("|")}|`
    }

    tableThRender(ths){
        return `|${ths.map(th => {
            if(th.content.type == 'th'){
                return `${this.$renderChildren(th.childNodes)}`
            }
        }).join("|")}|
|${ths.map(th => '----').join("|")}|`
    }

    tableTrRender(trs){
        return trs.map(tr => {
            if(tr.content.type == 'tr'){
                if(this.isTh(tr)){
                    return this.tableThRender(tr.childNodes)
                } else {
                    return this.tableTdRender(tr.childNodes)
                }
            } else {
                return ''
            }
        }).join("\n")
    }

    render(){
        var str = `${
            this.tableTrRender(this.$getChildrenText())
            }`;
        return str;
    }
}

export default Table;