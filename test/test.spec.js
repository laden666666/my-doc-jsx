import * as myDocJsx from '../src/index'
var assert = require('chai').assert;

describe('myDocJsx基本功能测试', function() {
    it('转换测试', async function() {
        var jsxStr =
            `<doc>
                <h1>测试</h1>
                <h2>测试</h2>
                <code>测试</code>
            </doc>`
        var htmlStr = await myDocJsx.convert(jsxStr)
        assert.equal(htmlStr.indexOf('测试') > -1, true)
    });

    it('转义字符测试', async function() {
        var jsxStr =
            `<doc>
                <h1>{'<>'}</h1>
            </doc>`
        var htmlStr = await myDocJsx.convert(jsxStr)
        assert.equal(htmlStr.indexOf('&lt;&gt;') > -1, true)
    });

    it('markdown转换测试', async function() {
        var jsxStr =
            `<doc>
                <h1>123</h1>
            </doc>`
        var htmlStr = await myDocJsx.convert(jsxStr, {format: 'MARKDOWN'})
        assert.equal(htmlStr.indexOf('# 123') > -1, true)
    });

    it('插件测试', async function() {
        class TestAPI extends myDocJsx.BlockNode{
            constructor(...arg){
                super(...arg)
                this.priority = 0;
            }

            async render(render){
                var str = `<div>${await render.renderInlineNodes(this.childPseudoNodes)}</div>`;
                return str;
            }
        }
        class TestPlugin extends myDocJsx.BasePlugin{
            constructor(){
                super()
                this.registerBlockNode('HTML', 'test' ,TestAPI)
            }
        }

        var jsxStr =
            `<doc>
                <test>xxxx</test>
            </doc>`

        //未注册插件，无法正确解释
        var htmlStr = await myDocJsx.convert(jsxStr)
        assert.equal(htmlStr.indexOf('<div>xxxx</div>') > -1, false)

        //定义后可正确解释
        myDocJsx.usePlugin(new TestPlugin)
        htmlStr = await myDocJsx.convert(jsxStr)
        assert.equal(htmlStr.indexOf('<div>xxxx</div>') > -1, true)
    });

    it('jsxStr2Nodes测试', async function() {
        class TestAPI extends myDocJsx.BlockNode{
            constructor(...arg){
                super(...arg)
                this.priority = 0;
            }

            async render(render){
                var str = `<div class="test">${await render.renderInlineNodes(this.childPseudoNodes)}</div>`;
                return str;
            }
        }
        class JsxStr2Nodes extends myDocJsx.BlockNode{
            constructor(...arg){
                super(...arg)
                this.priority = 0;
            }

            async render(render){
                var str = `<div>${await render.renderBlockNodes( await myDocJsx.jsxStr2Nodes('<test>xxxx</test>', render, {}))}</div>`;
                return str;
            }
        }
        class TestPlugin extends myDocJsx.BasePlugin{
            constructor(){
                super()
                this.registerBlockNode('HTML', 'test' ,TestAPI)
                this.registerBlockNode('HTML', 'jsxStr2Nodes' ,JsxStr2Nodes)
            }
        }

        var jsxStr =
            `<doc>
                <jsxStr2Nodes>xxxx</jsxStr2Nodes>
            </doc>`

        myDocJsx.usePlugin(new TestPlugin)
        var htmlStr = await myDocJsx.convert(jsxStr)
        assert.equal(htmlStr.indexOf('<div><div class="test">xxxx</div></div>') > -1, true)
    });
});