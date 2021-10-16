<template>
  <div class="card">
    <div class="card-episode-header">
      <div>
        <img :src="episode.image" height="144" />
      </div>
      <div class="card-episode-metadata">
        <div>
          <h2>{{ episode.title }}</h2>
          <p><strong>{{ episode.creator }}</strong> - {{ episode.pubDate }}</p>
        </div>
        <button @click="playEpisode(episode)">Ouvir episódio</button>
      </div>
    </div>
    <hr class="spacer" />
    <h3>Description:</h3>
    <div v-html="episode.descriptionHtml" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PodcastEpisode from '../lib/PodcastEpisode';

export default {
  name: 'EpisodeCard',
  props: {
    episode: PodcastEpisode,
  },
  methods: {
    ...mapActions(['playEpisode'])
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

.description {
  line-height: 1.5;
  font-size: 1.5rem;
}

.card {
  margin: 2.1rem;
  padding: 2.1rem 2.1rem 1.1rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  background: #2d333b;
  color: #fff;
}

.card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.card .btn {
  margin-bottom: 1.1rem;
}

.card-episode-header {
  display: flex;
}

.card-episode-header p {
  font-size: 0.8rem;
}

.card-episode-metadata {
  padding-left: 2.1rem;

  button {
    color: black;
    cursor: pointer;
    padding: 5px 8px;
  }
}

.card-episode-metadata h2 {
  font-size: 2.1rem;
}

</style>