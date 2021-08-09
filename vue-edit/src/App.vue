<template>
  <div id="app">
    <Edit  @input="handleInput" @run="handleRun" />
    <Show  :code="code" ref="show" />
  </div>
</template>

<script>
import Edit from "@/components/edit.vue";
import Show from "@/components/show.vue";
export default {
  components: {
    Edit,
    Show,
  },
  data(){
    return{
      code:''
    }
  },
  methods:{
    handleInput(v){
      this.code =v;

    },
    handleRun(){
    this.$refs.show.run()

  }
  },

};
</script>

<style lang="stylus">
* {
  marign: 0;
  padding: 0;
}

html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;

  & >div {
    width: 50%;
    height: 100%;
  }
}
</style>
