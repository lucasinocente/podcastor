import fetch from 'isomorphic-fetch';

// const urlServer = 'https://countries.trevorblades.com'
const urlServer = 'http://localhost:8080'

const GET_USER_BY_ID = `
  query getUser {
    user_by_pk(id: 1) {
      name
      email
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
      'x-hasura-admin-secret': 'abc123'
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
      const query = GET_USER_BY_ID;
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

  loadRss = async rss => {
    const response = await fetch(rss);
    const text = response.text();
    return text;
  }
}

export default Server;