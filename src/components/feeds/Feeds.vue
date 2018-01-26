<template>
  <div>
    <main-nav></main-nav>
    <create-feed></create-feed>
    <feeds-item v-for="feed in $store.state.feeds" :key="feed.id" :feed="feed"></feeds-item>
  </div>
</template>

<script>
  import MainNav from '@/components/MainNav';
  import FeedsItem from '@/components/feeds/FeedsItem';
  import CreateFeed from '@/components/feeds/CreateFeed';

  export default {
    name: 'feeds',
    components: {
      MainNav,
      FeedsItem,
      CreateFeed,
    },
    created() {
      console.log('created');
      this.$store.dispatch('fetchFeeds');
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
