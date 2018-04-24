<template>
    <div>
        <Menu :basket="basket"></Menu>

        <div class="container">

            <div class="row">

                <div class="col-md-12">

                    <div class="row">
                        <Beer :data="beers[0]" @update-basket="onAddToBasket"></Beer>
                        <Beer :data="beers[1]" @update-basket="onAddToBasket"></Beer>
                        <Beer :data="beers[2]" @update-basket="onAddToBasket"></Beer>
                        <Beer :data="beers[3]" @update-basket="onAddToBasket"></Beer>
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
