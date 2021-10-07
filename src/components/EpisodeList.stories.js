import EpisodeList from './EpisodeList.vue';

const episodes = [
  {
    "title":"T1E3 - Salve América Latina",
    "pubDate":"Mon, 19 Jul 2021 00:54:42 GMT",
    "creator":"Lucas Inocente",
    "audio":"https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-6-19/51912360-d2c7-4285-ce69-24ae4f1c6e23.mp3",
    "image":"https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/1615193/1615193-1626656090896-8a964a54db044.jpg",
    "descriptionHtml":"<p>Nesse episódio eu falo sobre pirâmides, chimarrão e sobre muitas dúvidas da vida.</p>\n<p><br></p>\n<p>Links:</p>\n<p>Sabrina Fernandes - Ecofascismo - https://www.youtube.com/watch?v=WcD70B63El4</p>\n<p>Greg News - Crise Climática: https://www.youtube.com/watch?v=Zr5FjVga1Dw</p>\n"
  },
  {
    "title":"T1E2 - YAGNI KISS",
    "pubDate":"Fri, 25 Jun 2021 00:22:40 GMT",
    "creator":"Lucas Inocente",
    "audio":"https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-5-25/200221217-44100-2-a938a35fbf988.m4a",
    "image":"https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/1615193/1615193-1626656152781-6fd5b0fe4883d.jpg",
    "descriptionHtml":"<p>Você já trabalhou em algo que nunca foi usado?</p>\n"
  },
  {
    "title":"T1E1 - Familícia",
    "pubDate":"Wed, 09 Jun 2021 01:14:23 GMT",
    "creator":"Lucas Inocente",
    "audio":"https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-5-9/194950095-44100-2-c1a436ccdb13b.m4a",
    "image":"https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/1615193/1615193-1626656175299-9dd533012f3ad.jpg",
    "descriptionHtml":"<p>Tá sem cortar o cabelo a mais de um ano?</p>\n"
  },
  {
    "title":"Episódio Piloto - Manifesto Ágil",
    "pubDate":"Wed, 26 May 2021 01:32:40 GMT",
    "creator":"Lucas Inocente",
    "audio":"https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-05-26/cc348d760663f869a8a5390830ef2078.m4a",
    "image":"https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/1615193/1615193-1621992603620-2662a3a9c0ee5.jpg",
    "descriptionHtml":"<p>Fala galera, beleza?</p>\n<p>Esse é o episódio piloto do podcast Sabe de Nada, Inocente!</p>\n<p>E nele eu trago as minhas reflexões sobre o tema Manifesto para Desenvolvimento Ágil de Software.</p>\n<p>Bora trocar ideia?</p>\n"
  }
]

export default {
  title: 'Example/EpisodeList',
  component: EpisodeList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EpisodeList },
  template: '<episode-list :episodes="episodes" />',
});

export const Primary = Template.bind({});
Primary.args = {
  episodes,
};
