import applyMixin from './mixin';
import {forEach} from './util';

let Vue;

//最终用户拿到的是这个类的实例
class Store{
    constructor(options){
        let state = options.state;//用户传递过来的状态
        //如果直接将 state定义在实例上 稍后这个状态发生变化 视图不会更新的
        // defineReactive => vue-router 只定义了一个属性
        // vue中定义数据 属性名是又特点 的 如果属性名是通过 $XXX命名 的 他不会被代理到vue的实例 上

        //getters: 其实写的是方法， 但是取值的时候是属性
        this.getters = {};
        const computed = {};
        forEach(options.getters,(fn,key)=>{
            computed[key]=()=>{
                return fn(this.state);
            }
            Object.defineProperty(this.getters,key,{
                get:()=>{this._vm[key]}
            })

        })
        this._vm = new Vue({
            data:{
                $$state:state,//内部的状态
            },
            computed
        })
    }
    //类的属性访问器, 当用户去这个实例上取state属性时 会执行此方法
    get state(){
        return this._vm._data.$$state;
    }

}

const install = (_Vue)=>{
    Vue =  _Vue;
    applyMixin(Vue);
}

export {
    Store,
    install
}