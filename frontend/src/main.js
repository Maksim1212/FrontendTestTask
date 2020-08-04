import Vue from 'vue'
import router from './router/router'
import store from './store'
import VueMeta from "vue-meta";
import App from './App.vue';
import GAuth from 'vue-google-oauth2';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuelidate from "vuelidate";

const gauthOption = {
    clientId: '247409339704-fohillbippgv49r9054m33j0egmel218.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
}
Vue.use(GAuth, gauthOption);

Vue.use(VueAxios, axios);
Vue.use(Vuelidate);

Vue.config.productionTip = false;
Vue.use(VueMeta);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')