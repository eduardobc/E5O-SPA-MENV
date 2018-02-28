import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './app.vue'
import DisplayMain from './components/display-main.vue'

const routes = [
    {
        name: 'DisplayMain',
        path: '/',
        component: DisplayMain
    },
];
const router = new VueRouter({mode: 'history', routes: routes});
new Vue(Vue.util.extend({router}, App)).$mount('#website-app');

