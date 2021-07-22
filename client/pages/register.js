import { useState } from 'react'
import Head from 'next/head'
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const REGISTER_PODCAST = gql`
  mutation RegisterPodcast($type: String!) {
    registerPodcats(type: $type) {
      slug
      rss
    }
  }
`;

export default function Home() {
  const router = useRouter()
  const [slug, setSlug] = useState();
  const [rss, setRss] = useState();
  const [registerPodcats, { data }] = useMutation(REGISTER_PODCAST);

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('slug', slug);
    console.log('rss', rss);

    // registerPodcats(
    //   {
    //     variables:{
    //       slug,
    //       rss
    //     }
    //   }
    // );

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
            <input
              onChange={(event) => setSlug(event.target.value)}
              className={styles.input}
              type="text"
              name="slug"
              id="slug"
              placeholder="podcastor.me/slug"
              required
            />
          </div>
          <div>
            <label htmlFor="feed">Paste your RSS feed:</label>
            <input
              onChange={(event) => setRss(event.target.value)}
              className={styles.input}
              type="text"
              name="feed"
              id="feed"
              placeholder="https://anchor.fm/s/xpto/podcast/rss"
              required
            />
          </div>
          <input className={styles.button} type="submit" value="Register" />
        </form>
      </main>
    </div>
  )
}
