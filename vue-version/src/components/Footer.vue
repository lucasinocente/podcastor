<template>
  <footer class="footer">
    <a href="https://podcastor.me">
      Powered by <strong>Podcastor 🦥</strong>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

.footer {
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.1rem;
  background: #22272e;
  color: #ddd;
}

.footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.footer strong {
  margin-left: 5px;
}
</style>