import Server from './Server';

const server = new Server();

class Podcast {
  getBySlug = async slug => {
    return server.getPodcastBySlug(slug);
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