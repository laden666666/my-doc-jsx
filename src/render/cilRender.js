/**
 * Created by njz on 17/2/28.
 */
class CilRender{
    beginRender(){
        console.group("********** 开始博客输出 **********");
    }

    writeLine(str){
        console.log(str);
    }

    endRender(){
        console.group("********** 博客输出结束 **********");
    }

    render(vd){

    }
}

export default new CilRender();