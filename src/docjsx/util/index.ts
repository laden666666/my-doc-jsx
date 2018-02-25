declare function require(name: string): any

var escape = require('escape-html');

export function escapeHTML(htmlString){
    return escape(htmlString)
}