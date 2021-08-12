export default {
  standalone: process.env.STANDALONE_MODE === 'true',
  slug: process.env.STANDALONE_SLUG,
  standaloneStatic: process.env.STANDALONE_STATIC_MODE === 'true',
  rssLink: process.env.STANDALONE_RSS_LINK,
};