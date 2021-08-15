
import { parser, stringify } from './src/1.parser'
//默认jest 支支持node语法
describe('测试parser', () => {
    it('测试parser是否通过测试', () => {
        expect(parser('a=1&b=2&c=3')).toEqual({ a: '1', b: '2', c: '3'})


    })
})

describe('测试stringify', () => {
    it('测试parser是否通过测试', () => {
        expect(stringify({ a: 1, b: 2, c: 3})).toEqual('a=1&b=2&c=3')
    })
})