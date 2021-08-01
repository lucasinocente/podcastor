import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Container from '../components/Container';
import Podcast from '../lib/Podcast';

const podcast = new Podcast();

export default function PodcastPage({ slug, json }) {
  const image = json.image.url._text;
  const title = json.title._cdata;
  const author = json.author._cdata;
  const description = json.description._cdata;
  const episodes = json.item;

  console.log(json)

  return (
    <>
      <Header
        image={image}
        title={title}
      />
      <Container>
        <Title text={title} />
        <SubTitle text={description} />
      </Container>
      {
        episodes.map((data) => {
          const title = data.title._cdata;
          const audio = data.enclosure._attributes.url;

          return (
            <Card key={title}>
              <h2>{ title }</h2>
              <audio controls>
                <source src={audio} type="audio/x-m4a" />
              </audio>
            </Card>
          )
        })
      }
      <Footer />
    </>
  )
}

export async function getServerSideProps({ params: { slug } }) {
  const {
    response: {
      data
    },
    getJsonRss
  } = await podcast.getBySlug('AD');
  const json = await getJsonRss();

  console.log('------------------------------------------', data);

  return { props: { slug, json } }
}