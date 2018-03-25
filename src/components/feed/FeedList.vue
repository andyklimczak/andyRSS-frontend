<template>
  <div>
    <div v-if="$store.state.items.length > 0" class="feed">
      <feed-item v-for="item in $props.items" :key="item.id" :item="item"></feed-item>
    </div>
    <div v-else>
      No items!
    </div>
  </div>
</template>

<script>
  import FeedItem from '@/components/feed/FeedItem';

  export default {
    components: {
      FeedItem,
    },
    props: [
      'items',
    ],
    name: 'feed-list',
    created() {
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
