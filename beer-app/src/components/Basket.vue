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
        {{customer.name}}
        <div class="panel panel-default">
            <div class="panel-heading">Order</div>
            <div class="panel-body">

                <form novalidate="true" @submit="checkForm">

                    <div class="form-group" v-bind:class="{ 'has-error': errors.has('name') }">
                        <label class="control-label" for="name">Name</label>
                        <input type="text" v-validate="'required'" :model="customer.name" id="name" class="form-control"
                               name="name">
                    </div>


                    <div class="form-group" v-bind:class="{ 'has-error': errors.has('address') }">
                        <label class="control-label" for="address">Address</label>
                        <textarea id="address" class="form-control" name="address" v-model.lazy="customer.address"
                                  v-validate="'required'"></textarea>
                    </div>

                    <div class="form-group" v-bind:class="{ 'has-error': errors.has('creditCard') }">
                        <label class="control-label" for="creditCard">Credit card number</label>
                        <input id="creditCard" class="form-control" name="creditCard"
                               v-validate="'credit_card'"
                               v-model="customer.creditCard">
                    </div>

                    <div class="col-xs-12">
                        <button type="submit" class="btn btn-success pull-right" :disabled="errors.any()">
                            Validate
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div class="container">
            <hr>
            <Footer></Footer>
        </div>

    </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Menu from './Menu'
  import Footer from './Footer';

  export default {
    name: 'basket',
    components: {Menu, Footer},
    computed: {
      ...mapState(['basket'])
    },
    data() {
      return {
        customer: {
          name: '',
          address: '',
          creditCard: 0
        }
      }
    },
    methods: {
      checkForm(e) {
        // this.$validator.validateAll().then((result) => {
        //   if (result) {
        //     return;
        //   }
        // });
        e.preventDefault();
      },
      validCreditCard() {
        const pattern = '^[0-9]{3}-[0-9]{3}$';
        return this.customer.name && pattern.test(this.customer.name);
      }
    },
    created() {
    }
  }
</script>

<style>

</style>
