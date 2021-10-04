<template>
  <h2>{{text}}</h2>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    text: String,
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

h2 {
  margin: 1.3rem;
  font-size: 2.1rem;
  text-align: center;
  font-weight: normal;
}
</style>