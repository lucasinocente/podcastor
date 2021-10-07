import EpisodeCard from './EpisodeCard.vue';

const episode = {
  "title":"T1E3 - Salve América Latina",
  "pubDate":"Mon, 19 Jul 2021 00:54:42 GMT",
  "creator":"Lucas Inocente",
  "audio":"https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-6-19/51912360-d2c7-4285-ce69-24ae4f1c6e23.mp3",
  "image":"https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/1615193/1615193-1626656090896-8a964a54db044.jpg",
  "descriptionHtml":"<p>Nesse episódio eu falo sobre pirâmides, chimarrão e sobre muitas dúvidas da vida.</p>\n<p><br></p>\n<p>Links:</p>\n<p>Sabrina Fernandes - Ecofascismo - https://www.youtube.com/watch?v=WcD70B63El4</p>\n<p>Greg News - Crise Climática: https://www.youtube.com/watch?v=Zr5FjVga1Dw</p>\n"
}

const {
  title,
  pubDate,
  creator,
  audio,
  image,
  descriptionHtml,
} = episode;

export default {
  title: 'Example/EpisodeCard',
  component: EpisodeCard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EpisodeCard },
  template: `<episode-card
  :title="title"
  :pubDate="pubDate"
  :creator="creator"
  :audio="audio"
  :image="image"
  :descriptionHtml="descriptionHtml"
  />`,
});

export const Primary = Template.bind({});
Primary.args = {
  title,
  pubDate,
  creator,
  audio,
  image,
  descriptionHtml,
};
