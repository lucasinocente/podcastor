<template>
  <ul>
    <li v-for="episode in episodes" :key="episode.title">
      <episode-card :episode="episode" />
    </li>
  </ul>
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