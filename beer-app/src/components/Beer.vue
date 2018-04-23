<template>
    <div class="col-sm-4 col-lg-4 col-md-4">
        <div class="thumbnail" v-bind:class="{ last: data.stock === 1 }">
            <img :src="img" alt=""/>

            <div class="caption">
                <h4 class="pull-right">{{data.price}}€</h4>
                <h4>
                    <a href="#">{{data.label | uppercase }}</a>
                </h4>
                <p>
                    {{data.description}}</p>
            </div>
            <div class="ratings">
                <p>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star-empty"></span>
                </p>
                <button type="button" class="pull-right btn btn-primary"
                        aria-label="Ajoutez au Panier" v-on:click="addToBasket">Ajouter
                </button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'beer',
        props: ['data'],
        methods: {
            addToBasket() {
                this.$emit('update-basket', this.data)
            },
        },
        computed: {
          img() {
            return require('../assets/' + this.data.image)
          }
        }
    }
</script>>

<style lang="css">
    .last {
        background-color: rgba(255, 0, 0, 0.4)
    }
</style>