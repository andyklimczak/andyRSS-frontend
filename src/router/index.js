import Vue from 'vue';
import Router from 'vue-router';
import Feed from '@/components/Feed';
import Feeds from '@/components/Feeds';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feed',
      component: Feed,
    },
    {
      path: '/feeds',
      name: 'Feeds',
      component: Feeds,
    },
  ],
});
