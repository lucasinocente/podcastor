import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Podcast from '../lib/Podcast';

const podcast = new Podcast();

export default function PodcastPage({ slug, rss }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>🦫 Podcastor</title>
        <meta name="description" content="A place for podcast creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          { slug }
        </h1>

        <div className={styles.card}>
          RSS: { rss }
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href="/">
          <a>
            Powered by{' '}
            <strong>Podcastor 🦫</strong>
          </a>
        </Link>
      </footer>
    </div>
  )
}

export async function getServerSideProps({ params: { slug } }) {
  const response = await podcast.getBySlug('AD');
  console.log(JSON.stringify({ response }))

  return { props: { slug, rss: response.data.country.name } }
}