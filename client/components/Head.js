import HeadNext from 'next/head';

const Head = () => (
  <HeadNext>
    <title>Podcastor</title>
    <meta name="description" content="A place for podcast creator" />
    <link rel="icon" href="/podcastor.png" />
    <link rel="stylesheet" href="/styles/globals.css" type="text/css" />
  </HeadNext>
)

export default Head;