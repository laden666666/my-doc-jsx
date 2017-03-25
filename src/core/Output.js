/**
 * Created by njz on 2017/3/26.
 */
class Output{
    constructor(){
        this._content = "";
    }

    clear(){
        this._content = "";
    }

    append(str){
        this._content += str;
    }

    getContent(){
        return this._content;
    }
}

export default Output;