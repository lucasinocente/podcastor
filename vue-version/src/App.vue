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
    this.isLoading = false;
  },
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  background: #22272e;
  color: #ddd;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body {
  padding-top: 77px;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}
</style>
