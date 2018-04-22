import axios from 'axios';

const server = {
    url: 'http://localhost:1337',
    api: '/api/v1'
};

async function getBeers() {
    return await axios.get(`${server.url}${server.api}/beers`);
}


async function getBasket() {
    return await axios.get(`${server.url}${server.api}/basket`);
}

async function addBeerToBasket(beer) {
  return await axios.post(`${server.url}${server.api}/basket`, beer);
}


export default {
    getBeers,
    getBasket,
    addBeerToBasket
}