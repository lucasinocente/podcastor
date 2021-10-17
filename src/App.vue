<template>
  <div
    v-if="!isLoading"
    class="container"
  >
    <page-title
      :imageUrl="metadata.imageUrl"
      :title="metadata.title"
      :description="metadata.description"
    />
    <episode-list :episodes="episodes" />
    <now-playing />
  </div>
</template>

<script>
import PageTitle from './components/PageTitle'
import EpisodeList from './components/EpisodeList'
import NowPlaying from './components/NowPlaying'

import PodcastFactory from './lib/Podcast'

const rssLink = process.env.VUE_APP_RSS_LINK;
const Podcast = new PodcastFactory(rssLink);

export default {
  name: 'Podcastor',
  components: { PageTitle, EpisodeList, NowPlaying },

  data() {
    return {
      metadata: Podcast.metadata,
      episodes: Podcast.episodes,
      isLoading: true,
    }
  },

  async mounted() {
    await Podcast.init();
    this.episodes = Podcast.getEpisodes();
    this.metadata = Podcast.getMetadata();
    this.$store.commit('updateNowPlaying', this.episodes[0]);
    this.isLoading = false;
  },
}
</script>

<style lang="scss">
@import './assets/styles/global';

.container {
  margin: 0 auto;
  max-width: 897px;
}
</style>
