import install from './install'
import createMatcher from './create-matcher'
import HashHistory from './history/hashHistory';
import BrowserHistory from './history/browserHistory';
class VueRouter {
  constructor(options) {

    this.matcher = createMatcher(options.routes || []);//获取用户整个配置
    //创建历史管理 路由两种模式 hash 浏览器api
    this.mode = options.mode || "hash";

    switch (this.mode) {
      case 'hash':
        this.history = new HashHistory(this);
        break;
      case 'history':
        this.history = new BrowserHistory;
        break;

    }
    // this.history = {

    // }
  }
  init() {//app指代根实例
    //需要根据用户的配置 做出一个映射表

    //需要根据当前的路径 实现一下页面跳转的逻辑
    const history = this.history;
    //跳转路径 会进行匹配操作 根据路径获取对应的记录
    let setUpHashListener = () =>{
      history.setupListener();
    }
    history.transitionTo(history.getCurrentLocation(),setUpHashListener());


  }

}

VueRouter.install = install;




export default VueRouter;