import History from './base';


const ensureSlash = ()=>{
    if(window.location.hash){
        return
    }
    window.location.hash= '/';
}

export default class HashHistory extends History {

    constructor(router) {
        super(router);
        this.router = router;
        console.log("new hash");
        //如果使用hashHistory 默认如果没有hash 应该跳转到 首页 #/
        ensureSlash();
    }
    getCurrentLoction(){
        return window.location.hash.slice(1);//去掉#号
    }
    setupListener(){
        window.addEventListener("hashchange",()=>{
            console.log('hash 变化了')
        })
    }
}