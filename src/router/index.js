import Vue from 'vue';
import Router from 'vue-router';
import Feed from '@/components/feed/Feed';
import Feeds from '@/components/feeds/Feeds';

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
