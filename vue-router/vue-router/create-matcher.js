import createRouterMap from './create-router-map'
export default function createMatcher(routes){

    let  {pathList,pathMap} = createRouterMap(routes);
 
    console.log(pathList,pathMap,"kkkkkkkkkk")

    function match(){

    }
    function addRoutes(routes){
        createRouterMap(routes,pathList,pathMap);

    }
    return{
        match,
        addRoutes,
    }

}