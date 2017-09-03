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
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
