<template>
  <div class="feeds-item">
    <span>
      {{ feed.title }}
    </span>
    <span>
      <button @click="deleteFeed">X</button>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'feeds-item',
    props: ['feed'],
    methods: {
      deleteFeed() {
        this.$store.dispatch('deleteFeed', this.feed);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .feed-items
    align-content: flex-start
    align-items: flex-start
    display: flex
    flex-wrap: nowrap
    justify-content: space-between
</style>
