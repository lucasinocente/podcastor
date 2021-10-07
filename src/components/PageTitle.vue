<template>
  <h1>{{text}}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: String,
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

h1 {
  margin: 2.1rem;
  font-size: 3.4rem;
  text-align: center;
}
</style>