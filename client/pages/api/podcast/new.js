import { xml2json } from 'xml-js'
import Server from '../../../lib/Server'

const server = new Server()

export default async (req, res) => {

  try {
    const {
      rss: link,
      slug,
    } = req.body.input.podcast

    const rss = await server.loadRss(link)
    const json = xml2json(rss, { compact: true })
    const parsed = JSON.parse(json)

    const {
      author: { _cdata: author },
      title: { _cdata: name },
    } = parsed.rss.channel
    const email = 'test@test.com'

    const response = await server.insertUserOne({
      slug,
      rss: link,
      email,
      name,
      author,
    });

    console.log(response)

    res.status(200).json({ author, name, email })
  } catch (error) {
    res.status(500).json({ error })
  }
}
