/**
 * Created by njz on 17/2/28.
 * 渲染平台的基础类。因为同一个xml(jxl)博客会渲染为不同的形式平台上,所以需要提供不同形式的博客渲染类,故采用策略模式。
 * 此为一个渲染平台策略的基础类,每个渲染策略都要继承这个类,并注册到渲染策略表中,由page标签统一配置渲染策略。
 * 每个标签都应该将他的渲染策略注册到,饼子
 */
class BaseRender{
    constructor(){
        this.$tagMap = {};
    }

    //抽象函数,渲染的具体逻辑
    render(dom){

    }

    registerTag(tagName, fn){
        this.$tagMap[tagName] = fn;
    }
    getAllTags(){
        return this.$tagMap;
    }
}