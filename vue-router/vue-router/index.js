import install from './install'
import createMatcher from './create-matcher'
class VueRouter{
    constructor(options){
      
      this.matcher = createMatcher(options.routes || []);//获取用户整个配置

    }
    init(){//app指代根实例
        //需要根据用户的配置 做出t'yi

    }

}

VueRouter.install = install;
    
    


export default VueRouter;