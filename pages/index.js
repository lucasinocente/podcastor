import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🦫 Podcastor</title>
        <meta name="description" content="A place for podcast creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Podcastor 🦫
        </h1>

        <div className={styles.card}>
          <Link href="/register">
            <a>
              <h2>Register &rarr;</h2>
              <p>Create your free account and generate your own website.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
