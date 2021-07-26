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
  const response = await podcast.getBySlug('AD');
  console.log(JSON.stringify({ response }))

  return { props: { slug, rss: response.data.country.name } }
}