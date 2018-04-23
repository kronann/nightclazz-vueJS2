import Vue from 'vue'
import Vuex from 'vuex'
import BeerService from '../services/beer-service'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket: []
  },
  mutations: {
    setBasket(state, basket){
      state.basket = basket;
    }
  },
  actions: {
    addToBasket(commit, basket){
      commit('addToBasket', basket)
    },
    getBasket({commit}){
      BeerService.getBasket().then(basket => commit('setBasket', basket.data));
    }
  }
})
