import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iconName:'' ,
  },
  getters:{
    setIcon(){
      return this.state.iconName
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
