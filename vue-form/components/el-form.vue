<template>
  <form @submit.prevent>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "elForm",
  provide(){
      //
      return {
          elForm:this
      }
  },
  props: {
    rules: {
      type: Object,
        default: () => ({
          //保证数据不被共享
        }),
    },
    model: {
          type: Object,
          default: () => ({
            //保证数据不被共享
          }),
        },
  },
  methods:{
     async validate(cb){
        let children = this.$broadcast('elFormItem');//获取所有的子元素
        try{
             await Promise.all(children.map(child=>child.validate()));
             cb(true)
        }catch{
             cb(false)
        }
          
         
      }
  }
};
</script>

<style>
</style>