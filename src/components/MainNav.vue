<template>
  <div>
    <router-link to="/feeds">Feeds</router-link>
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
