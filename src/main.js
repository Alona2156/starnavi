import Vue from 'vue'
import App from './App.vue'
import {store} from './store.js';
import Vuetify, { VCarousel, VCarouselItem } from 'vuetify/lib/';
import 'vuetify/src/stylus/app.styl';
import VueRouter from 'vue-router';
import layoutOne from './components/pages/layoutOne.vue';

Vue.use(Vuetify, {
  components: {
    VCarousel,
    VCarouselItem
  }
});
Vue.use(VueRouter);

const routes = [
  {path: '/',
   component: layoutOne},
  {path: '/custom',
   component: () => import(/* webpackChunkName: "custom" */ './components/pages/layoutTwo.vue')},
  {path: '/nested',
   component: () => import(/* webpackChunkName: "nested"*/ './components/pages/layoutThree.vue')}
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
