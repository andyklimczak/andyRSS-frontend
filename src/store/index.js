import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    msg: 'state msg',
    items: [],
    feeds: [],
  },
  mutations: {
    addItems(state, items) {
      state.items = state.items.concat(items);
    },
    addFeeds(state, feeds) {
      state.feeds = state.feeds.concat(feeds);
    },
    markItemAsRead(state, item) {
      console.log(item);
      console.log(item.id);
      item.read = true;
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
    updateReadItem({ commit, state }, item) {
      console.log('update item read');
      return axios.patch(`http://localhost:3000/items/${item.id}`, {
        item: {
          read: true,
        },
      }).then((response) => {
        commit('markItemAsRead', item);
      });
    },
    fetchFeeds({ commit, state }) {
      console.log('fetch feeds');
      return axios.get('http://localhost:3000/feeds')
        .then((response) => {
          commit('addFeeds', response.data);
        });
    },
  },
});
