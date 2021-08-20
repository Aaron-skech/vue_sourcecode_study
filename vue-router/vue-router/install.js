 export let Vue = null;

 import RouterLink from './components/router-link';
 import routerView from './components/router-view';

const  install = function(_Vue){
    //install方法内部一般会用他来定义全局的内容 指令 全局组件 给原型扩展方法
    Vue = _Vue;
    
    Vue.component('router-link',RouterLink)
    Vue.component('router-view',routerView)

    //用户将router属性注册到Vue的实例上 
    
    Vue.mixin({
        beforeCreate(){
            //mixin可以给beforeCreate 这个生命周期增加合并的方法
           // console.log('name',this.$options.router);
            if(this.$options.router){
               this._routerRoot = this;//将当前根实例放到_routerRoot上
               this._router =this.$options.router;
               //当前用户的router属性
               this._router.init(this);//调用插件中的init方法
               Vue.util.defineReactive(this,'_route',this._router.history.current);
            }else{
                this._routerRoot = this.$parent && this.$parent._routerRoot;
            }
            //这里所有组件都拥有了 this._routerRoot属性

        }
    })
    Object.defineProperty(Vue.prototype,'$route',{//存放的都是属性 path matched
        get(){
            return this._routerRoot && this._routerRoot._route;//取current
        }
    })
    Object.defineProperty(Vue.prototype,'$router',{//存放的都是属性 path matched
        get(){
            return this._routerRoot && this._routerRoot._router;//取router的实例
        }
    })
    
}
export default install;