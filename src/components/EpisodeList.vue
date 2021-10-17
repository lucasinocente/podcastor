<template>
  <div class="list">
    <h2>Todos os episódios:</h2>
    <ul>
      <li v-for="episode in episodes" :key="episode.title">
        <episode-card :episode="episode" />
      </li>
    </ul>
  </div>
</template>

<script>
import EpisodeCard from './EpisodeCard.vue';

export default {
  name: 'EpisodeList',
  components: { EpisodeCard },
  props: {
    episodes: Array,
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin: 2.1rem;

  h2 {
    margin: 0;
    font-size: 1.3rem;
  }
}
</style>