<template>
  <div class="header">
    <img :src="imageUrl" height="144" />
    <h1>{{title}}</h1>
    <h2>{{description}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    imageUrl: String,
    title: String,
    description: String,
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

.header {
  padding: 2.1rem;
  text-align: center;

  h1 {
    font-size: 3.4rem;
  }

  h2 {
    font-weight: normal;
  }

  img {
    border: 8px solid #f3f3f3;
  }
}
</style>