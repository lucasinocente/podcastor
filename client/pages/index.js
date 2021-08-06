import Header from '../components/Header'
import Container from '../components/Container'
import Title from '../components/Title'
import CardHome from '../components/CardHome'
import PodcastPage from '../pages/[podcast]/index'
import Podcast from '../lib/Podcast'
import config from '../config'

const podcastFactory = new Podcast();

const HomePage = () => (
  <>
    <Header />
    <Container>
      <Title text="Gererate a website for your podcast with a simple RSS link" />
      <CardHome />
    </Container>
  </>
)

const Home = ({ standalone, json, slug }) =>  (
  <>
    {
      standalone
        ? <PodcastPage
            json={json}
            slug={slug}
          />
        : <HomePage />
    }
  </>
)

export async function getServerSideProps() {
  const { standalone, slug } = config;

  if(!standalone) {
    return {
      props: {
        standalone: false,
      }
    }
  }

  try {
    const { getJsonRss } = await podcastFactory.getBySlug(slug);
    const json = await getJsonRss();

    return {
      props: {
        standalone,
        slug,
        json
      }
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default Home;