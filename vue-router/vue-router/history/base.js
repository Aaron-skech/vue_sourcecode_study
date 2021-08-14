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

export default class History {
    constructor(router) {
        this.router = router;
        //这个代表是 当前路径匹配出来的记录
        this.current = createRoute(null, {
            path: '/'
        })
    }
    transitionTo(location, complete) {
        //获取当前的路径 匹配出对应的记录 当路径变化时 获取对应的记录 =>渲染页面
        // (router-view实现的)

        //通过路径拿到对应的记录 有了记录之后 就可以找到对应的匹配

        this.current = this.router.match(location)
        console.log(this.current,'routers')

        console.log(location)
        complete && complete();

    }
}