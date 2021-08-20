 const applyMixin = (Vue)=>{

    Vue.mixin({
        beforeCreate:vuexInit
    })


 }
//组件的创建过程是先父后子 
 function vuexInit(){
     const options = this.$options;
     if(options.store){
         //跟实例
         this.$store = options.store;

     }else if(options.parent&&options.parent.$store){
         //子组件
         this.$store = options.parent.$store;

     }

 }

 export default applyMixin;