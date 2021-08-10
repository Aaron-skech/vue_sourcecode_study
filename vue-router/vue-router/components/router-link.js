export default {

    //this指代的是当前组件
    render(){
        return <a>{this.$slots.default}</a>
    }
}