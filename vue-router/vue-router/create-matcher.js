import createRouterMap from './create-router-map'
export default function createMatcher(routes){

    let  {pathList,pathMap} = createRouterMap(routes);
    function match(){

    }
    function addRoutes(){
        createRouterMap(routes,pathList,pathMap);

    }
    return{
        match,
        addRoutes,
    }

}