<template>
  <div class="bar">
    <img :src="episode.image" height="89" />
    <div class="metadata">
      <h2>{{ episode.title }}</h2>
      <audio controls :autoplay="episode.autoplay" :key="episode.audio">
        <source :src="episode.audio" type="audio/x-m4a" />
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NowPlaying',
  computed: {
    episode() {
      return this.$store.state.nowPlaying;
    }
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
  }

  p {
    margin: 0;
  }
}
</style>