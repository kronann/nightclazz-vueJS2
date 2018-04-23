import BeerService from "../services/beer-service";

export default {
  namespaced: true,
  state: {
    beers: []
  },
  mutations: {
    loadBeers: (state, beers) => {
      state.beers = beers;
    },
    updateBeer: (state, beer) => {
      let index = state.beers.findIndex((b) => b.label === beer.label);
      state.beers[index] = beer;
    }
  },
  actions: {
    loadBeers({commit}) {
      BeerService.getBeers().then((response) => {
        commit('loadBeers', response.data)
      });
    },
    updateBeer: ({commit}, beer) => {
      commit('updateBeer', beer)
    }
  }
}