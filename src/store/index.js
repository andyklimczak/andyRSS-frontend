import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    msg: 'state msg',
    items: [],
  },
  mutations: {
    addItems(state, items) {
      state.items = state.items.concat(items);
    },
  },
  actions: {
    fetchFeed({ commit, state }) {
      console.log('fetch feed');
      return axios.get('http://localhost:3000/items')
        .then((response) => {
          console.log(response);
          commit('addItems', response.data);
        });
    },
  },
});
