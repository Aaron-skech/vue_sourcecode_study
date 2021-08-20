export default {
    name:'router-link',
    functional:true,
    props:{
        to:{
            type:String,
            required:true,
        },
        tag:{
            type:String
        }
    },
    

    //this指代的是当前组件
    render(h,context){
        const clickHandler = ()=>{//指定跳转方法
            context.parent.$router.push(context.props.to)
            //调用$router 的push方法
        }
        let tag = context.tag || 'a';
        return h(tag,{
            on:{
                click:clickHandler
            }


        },context.slots().default)
    }
}