import Vue from 'vue'
import Vuex from '../vuex/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age: 10,
    a: 1
  },
  getters: {
    getAge(state) {
      return state.age + 18;
    }

  },
  mutations: {
    changeAge(state, payload) {
      state.age += payload;

    }
  },
  actions: {
    changeAge({ commit }, payload) {
      setTimeout(() => {
        commit('changeAge', payload)

      }, 1000)

    }

  },
  modules: {
    a: {
      namespaced:true,
      state: {
        c: 100
      },
      mutations: {
        changeAge(state, payload) {
          console.log('a更新')
        }
      },
      actions:{
        changeAge(state,payload){
          console.log('c更新')
        }
      }
    },
    b:{
      namespaced:true,
       state:{
         d:100
       },
       mutations:{
         changeAge(state,payload){
           console.log('b更新')
         }
       },
       actions:{
        changeAge(state,payload){
          console.log('c更新')
        }
      },
       modules:{
         c:{
          namespaced:true,
           state:{
             c:100,
           },
           mutations:{
             changeAge(state,payload){
               console.log('c更新')
             }
           },
           actions:{
            changeAge(state,payload){
              console.log('c更新')
            }
          }
         }
       }
    }
  }
})


