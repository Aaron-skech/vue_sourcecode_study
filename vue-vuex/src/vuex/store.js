import applyMixin from './mixin';
import { forEach } from './util';
import ModuleCollection from './module/module-collection'

let Vue;

function installModule(store, rootState, path, module) {

    if (path.length > 0) {
        let parent = path.slice(0, -1).reduce((memo, current) => {
            return memo[current];
        }, rootState);

        //Vue.set会区分是否是响应式数据
        Vue.set(parent, path[path.length - 1], module.state)
    }


    module.forEachMutations((mutation, type) => {
        store._mutations[type] = store._mutations[type] || [];
        store._mutations[type].push((payload) => {
            mutation.call(store, module.state, payload)
        })

    })
    module.forEachActions((action, type) => {
        store._actions[type] = store._actions[type] || [];
        store._actions[type].push((payload) => {
            actions.call(store, store, payload)
        })
    })
    module.forEachGetters((getter, key) => {
        //如果getters重名 则会覆盖 所有模块的getters 都会定义到根模块上去
        store._wrappedGetters[key] = function () {
            return getter(module.state)
        }
    })
    module.forEachChild((child, key) => {
        installModule(store, rootState, path.concat(key), child)
    })

}
function resetStoreVm(store, state) {
    const wrappedGetters = store._wrappedGetters;
    let computed = {};
    store.getters = {};
    forEach(wrappedGetters, (fn, key) => {
        computed[key] = function () {
            return fn()
        }
        Object.defineProperty(store.getters,key,{
            get:()=>store._vm[key]
        })
    })

    store._vm = new Vue({
        data: {
            $$state: state
        },
        computed
    })
}

//最终用户拿到的是这个类的实例
class Store {
    constructor(options) {
        //格式化用户传入的参数

        //格式化成树形结构更直观一些 后续也更好操作一些
        // 1收集完模块 转化成一棵树
        this._modules = new ModuleCollection(options);
        // 2安装模块 将模块的熟悉感 定义在store中
        let state = this._modules.root.state;

        this._mutations = {};//存放所有模块中的mutations
        this._actions = {};//存放所有模块中的actions
        this._wrappedGetters = {};//存放所有模块中的getters
        installModule(this, state, [], this._modules.root)

        // console.log(this._mutations)
        // console.log(this._actions)
        // console.log(this._wrappedGetters)
        // console.log(state)
        resetStoreVm(this, state);




        //let state = options.state;//用户传递过来的状态
        //如果直接将 state定义在实例上 稍后这个状态发生变化 视图不会更新的
        // defineReactive => vue-router 只定义了一个属性
        // vue中定义数据 属性名是又特点 的 如果属性名是通过 $XXX命名 的 他不会被代理到vue的实例 上

        //getters: 其实写的是方法， 但是取值的时候是属性
        // this.getters = {};
        // const computed = {};
        // forEach(options.getters,(fn,key)=>{
        //     computed[key]=()=>{
        //         return fn(this.state);
        //     }
        //     Object.defineProperty(this.getters,key,{

        //         get:()=>this._vm[key]
        //     })

        // })
        // this._vm = new Vue({
        //     data:{
        //         $$state:state,//内部的状态
        //     },
        //     computed
        // });
        //发布订阅模式 将用户定义的mutation和action先保存起来 稍后 当调用commit时 就找订阅的mutation方法 调用dispatch 就找对应的action方法

        // this._mutations = {};
        // forEach(options.mutations,(fn,type)=>{
        //     this._mutations[type] = (payload)=>fn.call(this,this.state,payload)

        // })
        // this._actions = {};
        // forEach(options.actions,(fn,type)=>{
        //     this._actions[type] = (payload)=>fn.call(this,this,payload)

        // })
    }
    commit = (type, payload) => {
        this._mutations[type].forEach(fn => fn(payload));

    }
    dispatch = (type, payload) => {
        this._actions[type].forEach(fn => fn(payload));

    }
    //类的属性访问器, 当用户去这个实例上取state属性时 会执行此方法
    get state() {
        return this._vm._data.$$state;
    }

}

const install = (_Vue) => {
    Vue = _Vue;
    applyMixin(Vue);
}

export {
    Store,
    install
}