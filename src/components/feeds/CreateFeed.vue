<template>
  <div>
    <input v-model="url" placeholder="RSS URL">
    <button @click="createFeed">Create</button>
  </div>
</template>

<script>
  export default {
    name: 'create-feed',
    data() {
      return {
        url: '',
      };
    },
    methods: {
      createFeed() {
        const url = this.$data.url;
        if (url) {
          this.$store.dispatch('createFeed', this.$data.url);
          this.$data.url = '';
        }
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
</style>
