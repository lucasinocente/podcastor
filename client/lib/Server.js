import fetch from 'isomorphic-fetch';

const urlServer = 'http://localhost:8080/v1/graphql'

const GET_USER_BY_SLUG = `
query MyQuery ($slug: String!) {
  user(where: {slug: {_eq: $slug}}) {
    slug
    rss
  }
}
`

const REGISTER_PODCAST = `
  mutation newPodcast(
    $podcast: newPodcastInput!
  ) {
    newPodcast(podcast: $podcast) {
      author
      name
      email
    }
  }
`;

class Server {
  async fetchServer({
    query,
    variables,
  }) {
    try {
      const body = JSON.stringify({ query, variables });
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-hasura-admin-secret': 'abc123',
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
    } catch (error) {
      console.error(error)
      throw error;
    }
  }

  getPodcastBySlug = async slug => {
    try {
      const query = GET_USER_BY_SLUG;
      const variables = { slug }
      const {
        data,
        errors
      } = await this.fetchServer({
        query,
        variables,
      });

      if (errors) {
        throw new Error(errors);
      }

      if (data.user.length === 0) {
        throw new Error('User not found');
      }

      return data.user[0];
    } catch (error) {
      throw error;
    }
  }

  registerPodcast = async ({
    slug,
    rss,
  }) => {
    try {
      const query = REGISTER_PODCAST;
      const variables = {
        podcast: {
          rss: rss,
          slug: slug,
        },
      }
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