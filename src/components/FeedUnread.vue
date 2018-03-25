<template>
  <div>
    <main-nav></main-nav>
    <feed-list :items="$store.state.unreadItems"></feed-list>
  </div>
</template>

<script>
  import FeedList from '@/components/feed/FeedList';
  import MainNav from '@/components/MainNav';

  export default {
    components: {
      FeedList,
      MainNav,
    },
    name: 'feed',
    created() {
      console.log('created');
      this.$store.dispatch('fetchUnreadFeed');
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .feed
    margin-right: auto
    margin-left: auto
    padding-right: 500px
    padding-left: 500px
</style>
