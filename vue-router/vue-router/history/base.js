export default class History{
    constructor(router){
        this.router = router;
    }

    transitionTo(location,complete){
        //获取当前路径 匹配出对应路径
        console.log(location);//匹配路径
        complete && complete()
    }

}