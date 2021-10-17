<template>
  <div class="bar">
    <img :src="nowPlaying.image" height="89" />
    <div class="metadata">
      <h2>{{ nowPlaying.title }}</h2>
      <audio controls :autoplay="autoplay" :key="nowPlaying.audio">
        <source :src="nowPlaying.audio" type="audio/x-m4a" />
      </audio>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NowPlaying',
  computed: {
    ...mapState(['autoplay', 'nowPlaying'])
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

.bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.8rem;
  text-align: left;
  border-top: 1px solid #7a7a7a;
  background: #2d333b;
  color: #fff;
  display: flex;

  img {
    margin-right: 0.8rem;
  }

  audio {
    margin-top:  0.8rem;
    width: 100%;
  }
}

.metadata {
  width: 100%;

  h2 {
    margin: 3px 13px 0 0;

    @media (max-width: 600px) {
      font-size: 1.3rem;
    }
  }

  audio {
    height: 38px;
  }

  p {
    margin: 0;
  }
}
</style>