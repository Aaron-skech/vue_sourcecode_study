const parser = (str)=>{
    const obj ={};
    str.replace(/([^&=]+)=([^&=]+)/g,function(){
        obj[arguments[1]] = arguments[2]
    })

    return obj;
}
console.log(parser('a=1&b=2&c=3'))
const stringify = (obj)=>{
    const arr =[];
    for(let key in obj){
        arr.push(`${key}=${obj[key]}`);
    }
    console.log(arr,'arr')
    return arr.join('&');
}
console.log(stringify({ a: 1, b: 2, c: 3}))
export {
    parser,stringify
}