import Vue from 'vue';
import Router from 'vue-router';
import Feed from '@/components/Feed';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feed',
      component: Feed,
    },
  ],
});
