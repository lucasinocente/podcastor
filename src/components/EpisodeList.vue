<template>
  <ul>
    <li v-for="episode in episodes" :key="episode.title">
      <episode-card
        :image="episode.image"
        :title="episode.title"
        :creator="episode.creator"
        :pubDate="episode.pubDate"
        :audio="episode.audio"
        :descriptionHtml="episode.descriptionHtml"
      />
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

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

h2 {
  margin: 1.3rem;
  font-size: 2.1rem;
  text-align: center;
  font-weight: normal;
}
</style>