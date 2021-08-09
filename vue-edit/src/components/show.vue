<template>
     <div class="show">
        <h1>
           代码运行结果
        </h1> 
          <div class="show-box" ref="show">
             这里显示最终结果
          </div>
     </div>
</template>

<script>
export default {
   props:{
      code:{//会将这个属性放在当前的实例上
         type:String,
         default:'',
      }
   },
   methods:{
      getSource(type){
         const reg = new RegExp(`<${type}[^>]*>`)//开始标签
         let code = this.code;
         let matches = code.match(reg);
          if(matches){
             let tag = matches[0];
             return code.slice(code.indexOf(tag)+tag.length,code.lastIndexOf(`</${type}`))
          }
          return '';

      },
      run(){
         //获取模板中的内容
         const template = this.getSource('template');
         const script = this.getSource('script').replace(/export default/,'return');
         const style = this.getSource('style');
         let component = {};
          if(script){
               component = new Function(script)()
          }
          if(template){
                component.template = template;
                let instance = new (this.$options._base.extend(component));
                this.$refs.show.appendChild(instance.$mount().$el)
          }
          if(style){
                let element = document.createElement('style');
                  element.type = 'text/css';
                  element.innerText = style;
                  document.body.appendChild(element);
          }
       
      }
   }

}
</script>

<style>

</style>