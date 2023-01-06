import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
// регистрация как обычный плагин

//функция use
Vue.use(Vuex)

//формируем объект store
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    post
  }
})
