import Vue from 'vue';
import App from './App';
Vue.prototype.$dispatch = function(componentName,eventName){
    let parent = this.$parent;
    while(parent){
        let name = parent.$options.name;
        if(name === componentName){
            break;
        }else{
            parent = parent.$parent;
        }
    }
    if(parent ){
        if(eventName){
            return parent.$emit(eventName);//触发这个方法
        }
        return parent
    }
}

Vue.prototype.$broadcast = function(componentName,eventName){
    let children = this.$children;
    let arr = [];
    function findChildren(children){
        children.forEach(child => {
            if(child.$options.name ===componentName){
                if(eventName){
                    child.$emit(eventName);
                }else{
                    arr.push(child)
                }
            }
            if(child.$children){
                findChildren(child.$children)
            }
            
        });
    }
             findChildren(children)
             return arr;
}
new Vue({
    el:"#app",
    render: h=>h(App)
})