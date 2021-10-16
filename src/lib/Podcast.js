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

  buildMetadata() {
    this.metadata.imageUrl = this.jsonContent.image.url._text;
    this.metadata.title = this.jsonContent.title._cdata;
    this.metadata.description = this.jsonContent.description._cdata;
  }

  buildEpisode(payload) {
    return new PodcastEpisode({
      title: payload.title._cdata,
      pubDate: payload.pubDate._text,
      creator: payload['dc:creator']._cdata,
      audio: payload.enclosure._attributes.url,
      image: payload['itunes:image']._attributes.href,
      descriptionHtml: payload['itunes:summary']._text,
    });
  }

  buildEpisodeList() {
    this.episodes = this.jsonContent.item.map(
      episode => this.buildEpisode(episode)
    )
  }

  async init() {
    await this.loadRssContent();
    this.buildMetadata();
    this.buildEpisodeList();
  }
}

export default Podcast;