/**
 * Created by njz on 17/2/28.
 */
class DomRender{
    beginRender(){
        console.group("********** 开始博客输出 **********");
    }

    writeLine(str){
        console.log(str);
    }

    endRender(){
        console.group("********** 博客输出结束 **********");
    }

    render(vd) {
        this.beginRender();

        this.endRender();
    }
}

export default new DomRender();