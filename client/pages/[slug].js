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
        <SubTitle text={'Episodes:'} />
        {
          episodes.map((data) => {
            const title = data.title._cdata;
            const pubDate = data.pubDate._text;
            const creator = data['dc:creator']._cdata;
            const audio = data.enclosure._attributes.url;
            const image = data['itunes:image']._attributes.href;
            const description = data['itunes:summary']._text;

            return (
              <Card key={title}>
                <div className="card-episode">
                  <div className="card-episode-header">
                    <div>
                      <img src={image} height="144" />
                    </div>
                    <div className="card-episode-metadata">
                      <div>
                        <h2>{ title }</h2>
                        <p><strong>{creator}</strong> - { pubDate }</p>
                      </div>
                      <audio controls>
                        <source src={audio} type="audio/x-m4a" />
                      </audio>
                    </div>
                  </div>
                  <hr className="spacer" />
                  <h3>Description:</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: description
                    }}>
                  </div>
                </div>
              </Card>
            )
          })
        }
        <Footer />
      </Container>
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