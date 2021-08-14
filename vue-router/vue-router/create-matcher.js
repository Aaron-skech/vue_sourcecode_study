import createRouterMap from './create-router-map'
export default function createMatcher(routes){

    let  {pathList,pathMap} = createRouterMap(routes);

     addRoutes([{path:'/xxx',component:{}}])

    console.log(pathMap,pathList,'kkkk')
    function match(){
    }
    function addRoutes(routes){//routes 动态添加路由
        createRouterMap(routes,pathList,pathMap);

    }
    return{
        match,
        addRoutes,
    }

}