<template>
  <div v-if="!isLoading">
    <navbar
      :title="metadata.title"
      :imageUrl="metadata.imageUrl"
    />
    <page-title :text="metadata.title" />
    <sub-title :text="metadata.description" />
    <sub-title text="Episodes:" />
    <episode-list :episodes="episodes" />
    <footer-sign />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import SubTitle from './components/SubTitle'
import EpisodeList from './components/EpisodeList'
import FooterSign from './components/Footer'
import PodcastFactory from './lib/Podcast'

const rssLink = 'https://anchor.fm/s/a392d44/podcast/rss';
const Podcast = new PodcastFactory(rssLink);

export default {
  name: 'Podcastor',
  components: { Navbar, PageTitle, SubTitle , EpisodeList, FooterSign },

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
    console.log({ episodes: this.episodes })
    this.isLoading = false;
  },
}
</script>

<style lang="scss">
@import './assets/styles/global';
</style>
