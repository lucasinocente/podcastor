import { xml2json } from 'xml-js';
import PodcastEpisode from './PodcastEpisode';

class Podcast {
  constructor (rssLink) {
    this.rssLink = rssLink;
    this.jsonContent = null;
    this.metadata = {
      title: null,
      imageUrl: null,
      description: null,
    }
    this.episodes = [{}]
  }

  async init() {
    await this.loadRssContent();
    this.buildMetadata();
    this.buildEpisodes();
    console.log(JSON.stringify(this.episodes))
  }

  buildMetadata() {
    this.metadata.imageUrl = this.jsonContent.image.url._text;
    this.metadata.title = this.jsonContent.title._cdata;
    this.metadata.description = this.jsonContent.description._cdata;
  }

  buildEpisodes() {
    this.episodes = this.jsonContent.item.map(
      episode => new PodcastEpisode(episode)
    )
  }

  getMetadata() {
    return this.metadata;
  }

  getEpisodes() {
    return this.episodes;
  }

  getXmlContent = async () => {
    const response = await fetch(this.rssLink);
    return response.text();
  }

  loadRssContent = async () => {
    try {
      const rss = await this.getXmlContent();
      const json = xml2json(rss, { compact: true });
      const parsed = JSON.parse(json);

      this.jsonContent = parsed.rss.channel;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Podcast;