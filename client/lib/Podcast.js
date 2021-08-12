import { xml2json } from 'xml-js';
import Server from './Server';

const server = new Server();

class Podcast {
  constructor () {
    this.response = {}
    this.json = null;
  }

  loadRssFromServer = async (rssLink) => {
    try {
      const rss = await server.loadRss(rssLink);
      const json = xml2json(rss, { compact: true });
      const parsed = JSON.parse(json);

      return parsed.rss.channel;
    } catch (error) {
      throw new Error(error);
    }
  }

  getJsonRss = async () => {
    const json = await this.loadRssFromServer(this.response.rss);
    this.json = json;
    return this.json
  }

  getJsonFromRssLink = async (rssLink) => {
    const json = await this.loadRssFromServer(rssLink);
    this.json = json;
    return this.json
  }

  getBySlug = async slug => {
    const response = await server.getPodcastBySlug(slug);
    this.response = response;
    return this;
  }

  register = async ({
    slug,
    rss,
    email,
    name,
  }) => {
    return server.registerPodcast({
      slug,
      rss,
      email,
      name,
    });
  }
}

export default Podcast;