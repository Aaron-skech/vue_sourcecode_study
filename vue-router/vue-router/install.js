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
            console.log('name',this.$options.router);
            if(this.$options.router){
                console.log('root',this.$options.name)
            }else{
                console.log('sub',this.$options.name)
            }

        }
    })
    
    
}
export default install;