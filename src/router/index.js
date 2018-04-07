import Vue from 'vue';
import Router from 'vue-router';
import Feed from '@/components/Feed';
import FeedUnread from '@/components/FeedUnread';
import Feeds from '@/components/feeds/Feeds';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/feed',
      name: 'Feed',
      component: Feed,
    },
    {
      path: '/',
      name: 'FeedUnread',
      component: FeedUnread,
    },
    {
      path: '/feeds',
      name: 'Feeds',
      component: Feeds,
    },
  ],
});
