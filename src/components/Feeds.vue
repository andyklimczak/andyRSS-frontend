<template>
  <div>
    <main-nav></main-nav>
    feeds
  </div>
</template>

<script>
  import MainNav from '@/components/MainNav';

  export default {
    name: 'feeds',
    components: {
      MainNav,
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
