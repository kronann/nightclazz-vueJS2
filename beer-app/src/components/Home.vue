<template>
    <div>
        <Menu :basket="basket"></Menu>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <Beer v-for="beer in sortedBeers"
                              :data="beer"
                              @update-basket="onAddToBasket"
                              v-if="beer.stock > 0"></Beer>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <hr>
            <Footer></Footer>
        </div>

    </div>
</template>

<script>

    import Beer from './Beer'
    import Menu from './Menu'
    import Footer from './Footer'
    import BeerService from '../services/beer-service'

    export default {
        name: 'home',
        components: {Beer, Menu, Footer},
        data() {
            return {
                beers: [],
                basket: []
            };
        },
        mounted() {
            BeerService.getBeers().then(beers => this.beers = beers.data);
            BeerService.getBasket().then(basket => this.basket = basket.data);
        },
        methods: {
            onAddToBasket(beer) {
                BeerService.addBeerToBasket(beer).then(response => {
                    console.log('dssqd ',response.status);
                    if (response.status === 201) {
                        BeerService.getBasket().then(basket => this.basket = basket.data);
                        BeerService.getBeers().then(beers => this.beers = beers.data);
                    }
                });

            }
        },
        computed: {
            sortedBeers: function () {
                return this.beers.sort((beer, beer2) => {
                    let result = 0;
                    if (beer.price < beer2.price) {
                        result = 1;
                    } else if (beer.price > beer2.price) {
                        result = -1;
                    }
                    return result;
                })
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
