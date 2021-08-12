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
      author: { _cdata: authorRSS },
      title: { _cdata: nameRSS },
      'itunes:owner': {
        'itunes:email': { _text: emailRSS },
      },
    } = parsed.rss.channel

    const {
      data: {
        insert_user_one: {
          author, name, email
        }
      }
    } = await server.insertUserOne({
      slug,
      rss: link,
      email: emailRSS,
      name: nameRSS,
      author: authorRSS,
    });

    console.log(author, name, email)

    res.status(200).json({ author, name, email })
  } catch (error) {
    res.status(500).json({ error })
  }
}
