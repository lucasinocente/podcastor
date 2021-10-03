<template>
  <div class="card">
    <div class="card-episode-header">
      <div>
        <img :src="image" height="144" />
      </div>
      <div class="card-episode-metadata">
        <div>
          <h2>{{ title }}</h2>
          <p><strong>{{ creator }}</strong> - {{ pubDate }}</p>
        </div>
        <audio controls>
          <source :src="audio" type="audio/x-m4a" />
        </audio>
      </div>
    </div>
    <hr class="spacer" />
    <h3>Description:</h3>
    <div v-html="descriptionHtml" />
  </div>
</template>

<script>
export default {
  name: 'EpisodeCard',
  props: {
    image: String,
    title: String,
    creator: String,
    pubDate: String,
    audio: String,
    descriptionHtml: HTMLElement,
  }
}
</script>

<style scoped>

.title a {
  color: #0070f3;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.description {
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
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

.card-episode audio {
  width: 100%;
}

.card-episode-header {
  display: flex;
}

.card-episode-header p {
  font-size: 0.8rem;
}

.card-episode-metadata {
  padding-left: 2.1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-episode-metadata h2 {
  font-size: 2.1rem;
}

</style>