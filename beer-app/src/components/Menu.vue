<template>

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Zenika Ecommerce</router-link>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link v-if="basket.length > 0"  to="/basket">Accéder à votre panier ({{this.basket.length}} articles - {{getTotal() | currency}})</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        name: 'my-menu',
        props: ['basket'],
created(){
  console.log("dsdssdsq")
},
        methods: {
            getTotal() {
                return this.basket.reduce((next, current) => next + current.price, 0).toFixed(2);
            }
        }
    }
</script>

<style>

</style>