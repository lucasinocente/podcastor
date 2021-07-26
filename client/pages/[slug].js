import Card from '../components/Card';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Podcast from '../lib/Podcast';

const podcast = new Podcast();

export default function PodcastPage({ slug, rss }) {
  return (
    <>
      <Title text={slug} />
      <Card>
        RSS: { rss }
      </Card>
      <Footer />
    </>
  )
}

export async function getServerSideProps({ params: { slug } }) {
  const { response: { data }, getJsonRss } = await podcast.getBySlug('AD');
  const json = await getJsonRss();

  console.log(json)

  return { props: { slug, rss: data.country.name } }
}