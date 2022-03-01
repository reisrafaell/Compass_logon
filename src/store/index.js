import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iconName:'' ,
    users:[
      {id: 1,
      user: 'admin',
      password: 'admin'},
      
      {id: 2,
        user: 'admin2',
        password: 'admin2'},

        {id: 3,
          user: 'rafael',
          password: 'rafael'}
    ]

  },
  getters:{
    
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
