import Head from 'next/head'
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const GET_PODCAST = gql`
  query Country($code: ID!) {
    country(code: $code) {
      code
      name
    }
  }
`;

export default function Home({ slug }) {
  const { loading, error, data } = useQuery(GET_PODCAST, {
    variables: {
      code: 'AD'
    }
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data)

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
          RSS: { data.country.name }
        </form>
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
  return { props: { slug } }
}