import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home({ slug, rss }) {
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

        <form className={styles.card}>
          RSS: { rss }
        </form>
      </main>
      <footer className={styles.footer}>
        <Link href="/">
          <a>
            Powered by{' '}           <strong>Podcastor 🦫</strong>
          </a>
        </Link>
      </footer>
    </div>
  )
}


export async function getServerSideProps({ params: { slug } }) {
  const rss = 'Rss Link';

  return { props: { slug, rss } }
}