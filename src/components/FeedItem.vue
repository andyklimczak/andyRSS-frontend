<template>
  <div v-bind:class="['feed-item', {'read': item.read}]">
    <span class="feed-name">
      {{ item.feed.title }}
    </span>
    <a :href="item.url" target="_blank" rel="noopener noreferrer" @click="itemClicked" @mousedown.middle="itemClicked">
      {{ item.title }}
    </a>
    <span>
      {{ item.created_at }}
    </span>
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
<style scoped lang="sass">
.feed-item
  align-content: flex-start
  align-items: flex-start
  display: flex
  flex-wrap: nowrap
  justify-content: space-between

.read a
  color: grey
</style>
