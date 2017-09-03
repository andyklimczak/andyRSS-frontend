<template>
  <div v-bind:class="['feed-item', {'read': item.read}]">
    <a :href="item.url" target="_blank" rel="noopener noreferrer" @click="itemClicked">
      {{ item.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'feed-item',
  props: ['item'],
  methods: {
    itemClicked() {
      this.$store.dispatch('updateReadItem', this.item);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.read a {
  color: grey;
}
</style>
