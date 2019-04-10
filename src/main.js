import Vue from 'vue'
import App from './App.vue'
import {store} from './store.js';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';
import layoutOne from './components/pages/layoutOne.vue';

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  {path: '/',
   component: layoutOne},
  {path: '/custom',
   component: () => import('./components/pages/layoutTwo.vue')},
  {path: '/nested',
   component: () => import('./components/pages/layoutThree.vue')}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
