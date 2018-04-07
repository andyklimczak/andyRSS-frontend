<template>
  <div>
    <router-link to="/">Unread</router-link>
    <router-link to="/feed">All</router-link>
    <router-link to="/feeds">Manage Feeds</router-link>
  </div>
</template>

<script>
  export default {
    name: 'main-nav',
    created() {
      console.log('nav created');
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
