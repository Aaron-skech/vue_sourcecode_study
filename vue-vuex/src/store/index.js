import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age:18
  },
  getters:{
    getAge(state){
      return state.age + 5;
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
