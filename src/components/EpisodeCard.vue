<template>
  <div class="card">
    <div class="cover">
      <img
         @click="playEpisode(episode)"
         :src="episode.image"
         height="144"
         :alt="episode.title"
         :title="episode.title"
      />
    </div>
    <div class="content">
      <div>
        <h2>{{ episode.title }}</h2>
        <div class="author">
          <p><strong>{{ episode.creator }}</strong></p>
        </div>
        <p>
          <span
            class="btn"
            @click="playEpisode(episode)"
            :title="episode.title"
          >
            Ouvir episódio</span>
          ({{ duration }}) - {{ pubDate }}
        </p>
        <div class="description">
          <div v-html="episode.descriptionHtml" />
        </div>
      </div>
    </div>
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
  },
  computed: {
    pubDate: function() {
      const now = new Date();
      const yearNow = now.getFullYear();
      const date = new Date(this.episode.pubDate);
      const day = date.getDate();
      const month = this.episode.pubDate.split(' ')[2];
      const year = date.getFullYear();

      return `${month} ${day} ${year !== yearNow ? year : ''}`;
    },
    duration: function() {
      const value =  parseInt(this.episode.duration / 60, 10);
      return `${value}min`
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/global.scss';

.card {
  margin: 2.1rem 0;
  display: flex;

  @media (max-width: 600px) {
    display: block;
    padding-bottom: 21px;
    border-bottom: 1px solid #555555;
  }
}

.cover img {
  cursor: pointer;

  @media (max-width: 600px) {
    max-width: 244px;
    height: auto;
  }
}

.content {
  padding-left: 1rem;

  @media (max-width: 600px) {
    padding-left: 0;
    margin-top: 21px;
  }

  h2 {
    font-size: 1.21rem;
    margin: 0;
  }

  .btn {
    color: black;
    background: white;
    margin: 3px;
    padding: 8px;
    font-size: 0.8rem;
    border-radius: 2px;
    cursor: pointer;
  }

  .author p {
    margin: 0;
    font-size: 0.8rem;
  }

  .description {
    p {
      margin: 0.5rem 0;
    }
    a {
      text-decoration: underline;
    }
  }
}

</style>