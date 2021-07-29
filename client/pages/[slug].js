import Podcast from '../lib/Podcast';
import Header from '../components/Header';
import Title from '../components/Title';
import Card from '../components/Card';
import Footer from '../components/Footer';

const podcast = new Podcast();

export default function PodcastPage({ slug, json }) {
  const title = json.title._cdata;
  const image = json.image.url._text;
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
      <Title text={title} />
      <div className="container">
        <p>{description} - Por {author}</p>
        {
          episodes.map((data) => {
            const title = data.title._cdata;
            const audio = data.enclosure._attributes.url;

            return (
              <>
                <Card>
                  <h2>{ title }</h2>
                  <audio controls>
                    <source src={audio} type="audio/x-m4a" />
                  </audio>
                </Card>
              </>
            )
          })
        }
      </div>
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

  return { props: { slug, json } }
}