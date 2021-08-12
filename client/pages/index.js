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

const Home = ({
  standalone,
  standaloneStatic,
  json,
  slug
}) =>  (
  <>
    {
      standalone || standaloneStatic
        ? <PodcastPage
            json={json}
            slug={slug}
          />
        : <HomePage />
    }
  </>
)

export async function getServerSideProps() {
  const {
    standalone,
    standaloneStatic,
    slug,
    rssLink
  } = config;

  if(!standalone && !standaloneStatic) {
    return {
      props: {
        standalone: false,
      }
    }
  }

  if(standaloneStatic) {
    try {
      const json = await podcastFactory.getJsonFromRssLink(rssLink);

      return {
        props: {
          standaloneStatic,
          slug,
          json
        }
      }
    } catch (error) {
      console.log(error)
      return {
        notFound: true,
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