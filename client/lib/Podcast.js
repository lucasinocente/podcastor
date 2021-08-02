import { xml2json } from 'xml-js';
import Server from './Server';

const server = new Server();

class Podcast {
  constructor () {
    this.response = {}
    this.json = null;
  }

  getJsonRss = async () => {
    const rss = await server.loadRss(this.response.rss);
    const json = xml2json(rss, { compact: true });
    const parsed = JSON.parse(json);
    this.json = parsed.rss.channel;
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