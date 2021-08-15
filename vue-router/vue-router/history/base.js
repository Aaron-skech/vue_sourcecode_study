export const createRoute = (record, location) => {
    let matched = [];
    if (record) {
        while (record) {
            matched.unshift(record);
            record = record.parent;//通过当前的记录找到所有的父亲 
        }


    }
    return {
        ...location,
        matched
    }
}
const runQueue = (queue,iterator,complete)=>{
    function next(index){
        if(index>=queue.length){
            return complete();
        }
       let hook = queue[index];
       iterator(hook,()=>next(index+1))   
    }
    next(0);
}

//这个current 就是一个普通的变量 this.current 希望current变化了可以更新视图
export default class History {
    constructor(router) {
        this.router = router;
        //这个代表是 当前路径匹配出来的记录
        this.current = createRoute(null, {
            path: '/'
        })
    }
    
    transitionTo(location, complete) {
        console.log(location,'njn')
        //获取当前的路径 匹配出对应的记录 当路径变化时 获取对应的记录 =>渲染页面
        // (router-view实现的)

        //通过路径拿到对应的记录 有了记录之后 就可以找到对应的匹配
        //匹配到的个数和路径是相同的 就不需要再次跳转了
        let current = this.router.match(location)
       
         if(location == this.current.path && this.current.matched.length === current.matched.length){
               return;
         }
         //这里需要调用钩子函数
          let queue = this.router.beforeHooks;
          const iterator = (hook, next)=>{
            hook(current,this.current,next)
        }
          runQueue(queue,iterator,()=>{
            this.current  = current;
            this.cb&&this.cb(current)
         //当路径变化后 current属性会进行更新操作
           complete && complete();
   

          });

    }
    listen(cb){
        this.cb = cb;
    }
}