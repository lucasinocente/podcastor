import fetch from 'isomorphic-fetch';

const urlServer = 'https://countries.trevorblades.com'

const GET_COUNTRIES_BY_CODE = `
  query Country($code: ID!) {
    country(code: $code) {
      code
      name
    }
  }
`

const REGISTER_PODCAST = `
  mutation RegisterPodcast($type: String!) {
    registerPodcats(type: $type) {
      slug
      rss
    }
  }
`;

class Server {
  async fetchServer({
    query,
    variables,
  }) {
    const body = JSON.stringify({ query, variables });
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    const response = await fetch(urlServer, {
      method: 'POST',
      headers,
      body
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = response.json();
    return json;
  }

  getPodcastBySlug = async slug => {
    try {
      const query = GET_COUNTRIES_BY_CODE;
      const variables = { code: slug }
      const response = await this.fetchServer({
        query,
        variables,
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  registerPodcast = async ({
    slug,
    rss
  }) => {
    try {
      const query = REGISTER_PODCAST;
      const variables = { slug, rss }
      const response = await this.fetchServer({
        query,
        variables,
      });

      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default Server;