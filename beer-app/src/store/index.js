import Vue from 'vue'
import Vuex from 'vuex'
import basketStore from '@/store/basket';
import marketStore from '@/store/market';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    basketStore,
    marketStore
  },
  actions: {
    run({dispatch}) {
      dispatch('basketStore/getBasket');
      dispatch('marketStore/loadBeers');
    }
  }
})
