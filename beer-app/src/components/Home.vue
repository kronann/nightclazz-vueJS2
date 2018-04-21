<template>
    <div>
        <Menu :basket="basket"></Menu>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <Beer v-for="beer in sortedBeers" :data="beer" @update-basket="onAddToBasket"
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

    import {BEERS} from "../models/beers";

    export default {
        name: 'home',
        components: {Beer, Menu, Footer},
        data() {
            return {
                beers: BEERS,
                basket: []
            };
        },
        methods: {
            onAddToBasket(beer) {
                this.basket.push(beer)
                this.updateStock(beer);
            },
            updateStock(beer) {
                if (beer.stock > 0) {
                    beer.stock--;
                }
            }
        },
        computed: {
            sortedBeers: function()
            {
                return this.beers.sort((beer, beer2) => {
                let result = 0;
                if (beer.price < beer2.price) {
                    result = 1;
                } else if (beer.price > beer2.price) {
                    result = -1;
                }
                return result;
            })}
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
