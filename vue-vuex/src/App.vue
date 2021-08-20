<template>
  <div id="app">
      我的年龄是：  {{$store.state.a}} <br>
      我的年龄是：  {{$store.getters.getAge}} <br>

     <button @click="$store.state.a+=3">按钮</button>   同步更新 <br>

    <!-- <button @click="$store.commit('changeAge',5)">按钮</button>   同步更新 <br>
    <button @click="$store.dispatch('changeAge',5)">按钮</button>    异步更新 -->

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
