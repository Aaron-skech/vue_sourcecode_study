import createRouterMap from './create-router-map';
import { createRoute  } from './history/base';
export default function createMatcher(routes){

    let  {pathList,pathMap} = createRouterMap(routes);

     addRoutes([{path:'/xxx',component:{}}])

    console.log(pathMap,pathList,'kkkk')
    function match(location){
        let record = pathMap[location];//获取对应的记录
       return createRoute(record,{
            path:location
        })
    }
    function addRoutes(routes){//routes 动态添加路由
        createRouterMap(routes,pathList,pathMap);

    }
    return{
        match,
        addRoutes,
    }

}