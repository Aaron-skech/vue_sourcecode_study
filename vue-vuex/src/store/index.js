import Vue from 'vue'
import Vuex from '../vuex/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age:10,
    a:1
  },
  getters:{
    getAge(state){
      return state.age + 18;
    }

  },
  mutations: {
    changeAge(state,payload){
      state.age += payload;

    }
  },
  actions: {
    changeAge({commit},payload){
      setTimeout(()=>{
        commit('changeAge',payload)

      },1000)

    }

  },
  modules: {
  }
})
