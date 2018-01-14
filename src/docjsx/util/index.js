var escape = require('escape-html');

export default {
    escapeHTML(htmlString){
        return escape(htmlString)
    }
}