<template>
    <input type='text' :value="value" @input="handleInput" />
</template>

<script>
export default {
    name:'elInput',
    props:{
        value:{
            type:String
        }
    },
    methods:{
        handleInput(e){
           this.$emit('input',e.target.value)
             //组件在创建的过程中会确定父子关系 $parent 指向不明确
            this.$parent.$emit("validate")
            //自己实现dispatch
            this.$dispatch("elFormItem","validate")
        }
    }

}
</script>

<style>

</style>