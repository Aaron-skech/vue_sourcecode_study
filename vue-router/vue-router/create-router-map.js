const  addRouteRecord = (route,pathList,pathMap,parentRecord)=>{
      let path = parentRecord ? `${parentRecord.path}/${route.path}`: route.path;
      let record = {//根据当前路由产生一个记录 path component
          path,
          component:route.component,
          parent:parentRecord,
      }
      if(!pathMap[path]){//防止用户编写路由有重复的 不覆盖
        pathMap[path] = record;
        pathList.push(path);
      }
      //要将子路由也放到对应的pathMap和pathList
      if(route.children){
           route.children.forEach(r=>{
            addRouteRecord(r,pathList,pathMap,record)
           })
      }

}

 function createRouterMap(routes,oldPathList,oldPathMap){
    let pathList = oldPathList || [];
    let pathMap = oldPathMap || {};
    routes.forEach(route => {

        addRouteRecord(route,pathList,pathMap);
        
    });
    return {
        pathList,
        pathMap

    }

}

export default createRouterMap;
