<template>
  <div class="feed">
    <feed-item v-for="item in $store.state.items" :key="item.id" :item="item"></feed-item>
  </div>
</template>

<script>
  import FeedItem from './FeedItem';

  export default {
    components: { FeedItem },
    name: 'feed',
    created() {
      console.log('created');
      this.$store.dispatch('fetchFeed');
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
