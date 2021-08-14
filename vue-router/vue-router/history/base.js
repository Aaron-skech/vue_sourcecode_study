export default  class History{
    constructor(router){
        this.router = router;
    }
    transitionTo(location,complete){
        //获取当前的路径 匹配出对应的记录 当路径变化时 获取对应的记录
        console.log(location,complete,'location,complete')
        complete && complete();

    }
}