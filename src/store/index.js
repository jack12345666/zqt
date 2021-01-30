import Vue from 'vue'
import Vuex from 'vuex'
import party from './modules/party'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    party
  }
})

export default store
