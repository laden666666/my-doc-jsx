import 'babel-polyfill'
import myDocJsx from '../src/index'
var assert = require('chai').assert;

describe('myDocJsx基本功能测试', function() {
    it('转换测试', function() {
        var jsxStr =
            `<doc>
                <h1>测试</h1>
                <h2>测试</h2>
                <code>测试</code>
            </doc>`
        var htmlStr = myDocJsx.convert(jsxStr)
        assert.equal(htmlStr.indexOf('测试') > -1, true)
    });

    it('转义字符测试', function() {
        var jsxStr =
            `<doc>
                <h1>{'<>'}</h1>
            </doc>`
        var htmlStr = myDocJsx.convert(jsxStr)
        assert.equal(htmlStr.indexOf('&lt;&gt;') > -1, true)
    });

    it('插件测试', function() {

        class TestAPI extends myDocJsx.BlockTag{
            constructor(...arg){
                super(...arg)
                this.priority = 0;
            }

            render(){
                var str = `<div>${this.$renderChildren(this.$getChildrenText())}</div>`;
                return str;
            }
        }
        class TestPlugin extends myDocJsx.BasePlugin{
            constructor(){
                super()
                this.$registerBlockTag('HTML', 'test' ,TestAPI)
            }
        }

        var jsxStr =
            `<doc>
                <test>xxxx</test>
            </doc>`

        //未注册插件，无法正确解释
        var htmlStr = myDocJsx.convert(jsxStr)
        assert.equal(htmlStr.indexOf('<div>xxxx</div>') > -1, false)

        //定义后可正确解释
        myDocJsx.usePlugin(new TestPlugin)
        htmlStr = myDocJsx.convert(jsxStr)
        assert.equal(htmlStr.indexOf('<div>xxxx</div>') > -1, true)
    });
});