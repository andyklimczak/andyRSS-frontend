<template>
  <div class="feed-item">
    {{ item.title }}
  </div>
</template>

<script>
export default {
  name: 'feed-item',
  props: ['item'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
