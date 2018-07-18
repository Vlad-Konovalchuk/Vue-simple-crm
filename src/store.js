import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:'',
    token:localStorage.getItem('user-token')|| '',
    status:''
  },
  mutations: {
    signOut(state){
      state.user=null;
    }
  },
  actions: {

  }
})
