import install from './install'
import createMatcher from './create-matcher'
import HashHistory from './history/hashHistory';
import browserHistory from './history/browserHistory';
class VueRouter{
    constructor(options){
      
      this.matcher = createMatcher(options.routes || []);//获取用户整个配置

      //创建历史管理 路由两种模式hash 和 history
      this.mode = options.mode || 'hash';
      switch(this.mode){
        case 'hash':
          this.history = new HashHistory(this);
          break;
        case 'history':
          this.history = new browserHistory();
          break;
        default:'';
      }

    }
    match(location){
      //做一个中转
        return this.matcher.match(location);

    }
    init(app){//app指代根实例
        //需要根据用户的配置 做出一个映射表

        //需要根据当前路径 实现一个页面跳转逻辑
        
        const history = this.history;
        //跳转路径 会进行匹配操作 根据路径获取对应的记录

        const setupHashListener = ()=>{
          history.setupListener();
        }
        history.transitionTo(history.getCurrentLoction(),setupHashListener);
      
          //transitionTo 跳转逻辑 hash browser 都有
          // getCurrentLocation hash和browser不一样
           //setupListener hash 监听
          history.listen((route)=>{
              app._route = route;
              console.log(route,'================')
          })
    }
   

}

VueRouter.install = install;
    
    


export default VueRouter;