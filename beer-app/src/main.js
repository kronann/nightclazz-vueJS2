import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';

import './filters/index';
import {router} from "./router";
import store from './store';

Vue.use(VeeValidate)

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app');