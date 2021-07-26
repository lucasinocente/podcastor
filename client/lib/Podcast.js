import { xml2json } from 'xml-js';
import Server from './Server';

const server = new Server();

class Podcast {
  constructor () {
    this.data = {}
    this.json = null;
    this.rss = null;
  }

  getJsonRss = async () => {
    const rss = await server.loadRss(this.rss);
    const json = xml2json(rss);
    this.json = json;
    return json
  }

  getBySlug = async slug => {
    this.response = await server.getPodcastBySlug(slug);
    this.rss = 'https://anchor.fm/s/a392d44/podcast/rss';
    return this;
  }

  register = async ({
    slug,
    rss
  }) => {
    return server.registerPodcast({
      slug,
      rss
    });
  }
}

export default Podcast;