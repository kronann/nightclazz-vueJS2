<template>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="/home.html">Zenika Ecommerce</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="/basket.html">Accéder à votre panier ({{this.produits.length}} articles - {{getTotal()}}€)</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        name: 'Menu',
         props: ['produit'],
        data() {
            return {
                produits: []
            }
        },
        methods: {
            getTotal() {
                return this.produits.reduce((next, current) => next + current.price, 0);
            }
        }
    }
</script>

<style>

</style>