<template>
    <div class="container">
        <Menu :basket="basket"></Menu>

        <div class="panel panel-default">
            <div class="panel-heading">Basket</div>
            <ul class="list-group">
                <li class="list-group-item" v-for="beer in basket">
                    {{beer.label}}
                    <span class="label label-primary pull-right">{{beer.price | currency}}</span>
                </li>
            </ul>
        </div>

        <div class="container">
            <hr>
            <Footer></Footer>
        </div>

    </div>
</template>

<script>
    import BeerService from '../services/beer-service';
    import Menu from './Menu'
    import Footer from './Footer';

    export default {
        name: 'basket',
        components: {Menu, Footer},
        data() {
            return {
                basket: []
            }
        },
        created() {
            BeerService.getBasket().then(basket => this.basket = basket.data);
        }
    }
</script>

<style>

</style>
