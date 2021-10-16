<template>
  <div v-if="!isLoading">
    <page-title
      :imageUrl="metadata.imageUrl"
      :title="metadata.title"
      :description="metadata.description"
    />
    <sub-title text="Episódios:" />
    <episode-list :episodes="episodes" />
    <now-playing />
    <footer-sign />
  </div>
</template>

<script>
import PageTitle from './components/PageTitle'
import SubTitle from './components/SubTitle'
import EpisodeList from './components/EpisodeList'
import FooterSign from './components/Footer'
import NowPlaying from './components/NowPlaying'

import PodcastFactory from './lib/Podcast'

const rssLink = 'https://anchor.fm/s/a392d44/podcast/rss';
const Podcast = new PodcastFactory(rssLink);

export default {
  name: 'Podcastor',
  components: { PageTitle, SubTitle , EpisodeList, NowPlaying, FooterSign },

  data() {
    return {
      metadata: {
        title: null,
        imageUrl: null,
        description: null,
      },
      episodes: [{}],
      isLoading: true,
    }
  },

  async mounted() {
    await Podcast.init();
    this.episodes = Podcast.getEpisodes();
    this.metadata = Podcast.getMetadata();
    this.isLoading = false;
    this.$store.commit('updateNowPlaying', this.episodes[0]);
  },
}
</script>

<style lang="scss">
@import './assets/styles/global';
</style>
