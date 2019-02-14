import Vue from 'vue'
import App from './App.vue'
import {store} from './store.js';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';
import layoutOne from './components/pages/layoutOne.vue';
import layoutTwo from './components/pages/layoutTwo.vue';
import layoutThree from './components/pages/layoutThree.vue';

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  {path: '/',
   component: layoutOne},
  {path: '/custom',
   component: layoutTwo},
  {path: '/nested',
   component: layoutThree}
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
