<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/home.html">Zenika Ecommerce</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li>
                            <a href="/basket.html">Accéder à votre panier ({{this.basket.length}} articles - {{getTotal()}}€)</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">

            <div class="row">

                <div class="col-md-12">

                    <div class="row">
                        <beer :data="beers[0]" @update-basket="onAddToBasket"></beer>
                        <beer :data="beers[1]" @update-basket="onAddToBasket"></beer>
                        <beer :data="beers[2]" @update-basket="onAddToBasket"></beer>
                        <beer :data="beers[3]" @update-basket="onAddToBasket"></beer>
                    </div>

                </div>

            </div>

        </div>

        <div class="container">

            <hr/>

            <footer>
                <div class="row">
                    <div class="col-lg-12">
                        <p>Zenika ECommerce</p>
                    </div>
                </div>
            </footer>

        </div>

    </div>
</template>

<script>

    import Beer from "./Beer.vue";
    import {BEERS} from "../models/beers";
    //  import Menu from './Menu.vue'

    export default {
        components: {Beer},
        name: 'Home',

        data() {
            return {
                beers: BEERS,
                basket: []
            };
        },
        methods: {
            onAddToBasket(event) {
                this.basket.push(event)
            },
            getTotal() {
                return this.basket.reduce((next, current) => next + current.price, 0).toFixed(2);
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
