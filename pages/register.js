import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()

    alert('Success')

    router.push(event.target[0].value)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>🦫 Podcastor</title>
        <meta name="description" content="A place for podcast creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Registor 🦫
        </h1>

        <form className={styles.card} onSubmit={handleSubmit}>
          <h2>Create your Podcastor Page</h2>
          <div>
            <label htmlFor="slug">Choice your slug name:</label>
            <input className={styles.input} type="text" name="slug" id="slug" placeholder="podcastor.me/slug" required />
          </div>
          <div>
            <label htmlFor="feed">Paste your RSS feed:</label>
            <input className={styles.input} type="text" name="feed" id="feed" placeholder="https://anchor.fm/s/xpto/podcast/rss" required />
          </div>
          <input className={styles.button} type="submit" value="Register" />
        </form>
      </main>
    </div>
  )
}
