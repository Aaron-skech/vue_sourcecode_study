const  addRouteRecord = (route,pathList,pathMap)=>{
      let path = route.path;
      let record = {//根据当前路由产生一个记录
          path,
          component:route.component,
      }
      pathMap[path] = record;
}

export function createRouterMap(routes,oldPathList,oldPathMap){
    let pathList = oldPathList || [];
    let pathMap = oldPathMap || {};
    routes.forEach(route => {

        addRouteRecord(route,pathList,pathMap);
        
    });
    return {

    }

}
