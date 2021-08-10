let Vue = null;
class VueRouter{
    constructor(routes){
        console.log(routes);

    }

}

VueRouter.install = function(_Vue){
    //install方法内部一般会用他来定义全局的内容 指令 全局组件 给原型扩展方法
    Vue = _Vue;
    
    Vue.component('router-link',{

        //this指代的是当前组件
        render(){
            return <a>{this.$slots.default}</a>
        }
    })
    Vue.component('router-view',{
        render(){
            return <div></div>
        }
    })
    
    
}

export default VueRouter;