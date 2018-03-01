import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './app.vue'
import Body from './components/body.vue'

const routes = [
    {
        name: 'Body',
        path: '/',
        component: Body
    },
];

const router = new VueRouter({mode: 'history', routes: routes});
new Vue(Vue.util.extend({router}, App)).$mount('#website-app');

