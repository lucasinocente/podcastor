<template>
  <div class="metadata">
    <img :src="imageUrl" height="233" />
    <div class="text">
      <h1>{{title}}</h1>
      <div class="credits">
        <p>Powered by <a href="https://podcastor.me">Podcastor 🦥</a></p>
      </div>
      <div class="description">
        <p>{{description}}</p>
      </div>
    </div>
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

.metadata {
  margin: 2.1rem;
  display: flex;

  @media (max-width: 600px) {
    display: block;
  }

  img {
    border: 2px solid #f3f3f3;
    border-radius: 2px;
  }

  .text {
    padding: 1.3rem 0 0 2.1rem;

    @media (max-width: 600px) {
      padding: 0;
    }

    h1 {
      font-size: 2.1rem;
      margin: 0;

      @media (max-width: 600px) {
        margin-top: 21px;
      }
    }

    .credits p {
      font-size: 0.8rem;
    }

    .description p {
      font-size: 1rem;
      line-height: 1.3;
      margin-bottom: 0;
    }
  }
}
</style>