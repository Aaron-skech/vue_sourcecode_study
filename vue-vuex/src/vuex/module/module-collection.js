import { forEach } from "../util";
import Module from "./module";

export default class ModuleCollection {
    constructor(options) {
        this.register([], options);
    }
    register(path, rootModule) {
        let newModule = new Module(rootModule)

        //  let newModule={
        //      _raw:rootModule,
        //      _children:{},
        //      state:rootModule.state,

        //  }
        if (path.length == 0) {

            this.root = newModule
        } else {
            let parent = path.slice(0, -1).reduce((memo, current) => {
                return memo.getChild(current);
            }, this.root);
            parent.addChild(path[path.length - 1], newModule)


        }
        if (rootModule.modules) {
            forEach(rootModule.modules, (module, moduleName) => {
                this.register([...path, moduleName], module)
            })
        }

    }
    getNamespaced(path){
         let root = this.root;
        return path.reduce((namespaced,key)=>{
              root = root.getChild(key);
            return namespaced+ (root.namespaced ? key+'/':'');
        },'')

    }

}

//格式化树形结构

// this.root = {

// }