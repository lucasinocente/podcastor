import { xml2json } from 'xml-js'
import Server from '../../../lib/Server'

export default async (req, res) => {
  // const server = new Server()
  console.log(req.body)
  try {
    // const rssLink = req.body.rss
    // const slug = req.body.slug

    // const rss = await server.loadRss(rssLink)
    // const json = xml2json(rss, { compact: true })
    // const { author, name, email } = JSON.parse(json)

    // console.log(author, name, email)

    // mutationSavePodcast()

    // sendEmail()

    res.status(200).json({
      author: 'author',
      name: 'name',
      email: 'email',
    })
  } catch (error) {
    res.status(500).json({ error })
  }
}
