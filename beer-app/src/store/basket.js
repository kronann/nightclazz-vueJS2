import BeerService from "../services/beer-service";

export default {
  namespaced: true,
  state: {
    basket: []
  },
  mutations: {
    setBasket(state, basket){
      state.basket = basket;
    },
    addToBasket(state, beer){
      state.basket.push(beer);
    }
  },
  actions: {
    addToBasket({commit, dispatch}, beer){
      BeerService.addBeerToBasket(beer).then(response => {
        if (response.status === 201) {
          commit('addToBasket', response.data);
          dispatch('marketStore/updateBeer', response.data, {root: true});
        }
      });
    },
    getBasket({commit}){
      BeerService.getBasket().then(basket => commit('setBasket', basket.data));
    }
  }
}