import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios');

const baseUrl = "http://demo4452328.mockable.io/properties";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    items: []
  },
  getters: {},
  mutations: {
    getItems(state, items){
      state.items = items.data;
    }
  },
  actions: {
    getItems({commit}){
      axios.get(baseUrl, {headers: {
          'Content-type': 'application/json'
        }, data: {}
      })
        .then(response => {
          commit('getItems', response.data);
        })
        .catch(error =>{
          console.log(error);
        })
    }
  }
})
