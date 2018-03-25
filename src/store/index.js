import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import _ from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    msg: 'state msg',
    items: [],
    unreadItems: [],
    feeds: [],
  },
  mutations: {
    addItems(state, items) {
      state.items = _.unionBy(state.items, items, 'id');
      console.log(state.items);
    },
    addUnreadItems(state, items) {
      state.unreadItems = _.unionBy(state.unreadItems, items, 'id');
      console.log(state.items);
    },
    addFeeds(state, feeds) {
      state.feeds = _.unionBy(state.feeds, feeds, 'id');
    },
    markItemAsRead(state, item) {
      console.log(item);
      console.log(item.id);
      item.read = true;
    },
    deleteFeed(state, feed) {
      state.feeds = state.feeds.filter(f => f.id !== feed.id);
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
    fetchUnreadFeed({ commit, state }) {
      console.log('fetch feeds');
      return axios.get('http://localhost:3000/unread_items')
      .then((response) => {
        console.log(response);
        commit('addUnreadItems', response.data);
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
          console.log(response);
          commit('addFeeds', response.data);
        });
    },
    createFeed({ commit, state }, url) {
      return axios.post('http://localhost:3000/feeds', {
        feed: {
          url,
        },
      }).then((response) => {
        console.log(response);
        commit('addFeeds', [response.data]);
      });
    },
    deleteFeed({ commit, state }, feed) {
      return axios.delete(`http://localhost:3000/feeds/${feed.id}`)
      .then((response) => {
        console.log('deleted', feed);
        commit('deleteFeed', feed);
      });
    },
  },
});
