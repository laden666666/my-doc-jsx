/**
 * Created by njz on 2017/3/26.
 */
import {
    BlockTag
} from "../../../../index"

//查找参数的正则
const paramRegex = /@param\s+({.*})?(\s+\S+)?(\s+.*)?$/

//查找返回值的正则
const returnRegex = /@return\s+({.*})?(\s+.*)?$/

class API extends BlockTag{
    constructor(renderTools, content, tree, parentNode){
        super(renderTools, content, tree, parentNode)
        this.priority = 0;
    }

    render(){
        //将注释代码以“*”分割，因为每个个“*”是一行
        let rows = this.renderChildren(this.getTextChildren()).split("*").map(str=>str.trim()).filter(str=> str != '<br/>')

        //获取全部描述文本，描述文本是不以@开头的所有文本
        let describeText = rows.filter(str=> str[0] != '@').join('\n')

        //参数
        let paramsText = rows.filter(str => paramRegex.test(str)).map(str=>{
            var paramInfo = paramRegex.exec(str).slice(1, 4).map(str=>str && str.trim());
            return {
                name: paramInfo[1],
                type: paramInfo[0] && /{(.*)}/.exec(paramInfo[0])[1],
                describe: paramInfo[2]
            }
        })

        //返回值
        let returnText = rows.filter(str => returnRegex.test(str)).map(str=>{
            var paramInfo = returnRegex.exec(str).slice(1, 3).map(str=>str && str.trim());
            return {
                type: paramInfo[0],
                describe: paramInfo[1]
            }
        })[0]

        var mdText = `
>${describeText}

${paramsText.length ? `
##### 参数
|参数名|参数类型|参数说明|
|-|-|-|
${paramsText.map(param=>{
    return `|${param.name || ''}|${param.type || ''}|${param.describe || ''}|`
}).join('')}
` : ''}

${paramsText.length ? `
##### 返回值
|参数类型|参数说明|
|-|-|-|
${paramsText.map(param=>{
    return `|${param.type || ''}|${param.describe || ''}|`
}).join('')}
` : ''}
`
        return mdText
    }
}

export default API;