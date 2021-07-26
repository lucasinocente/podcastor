import Link from 'next/link'
import Card from './Card'

const CardHome = () => (
  <Card>
    <Link href="/register">
      <a>
        <h2>Register &rarr;</h2>
        <p>Create your free account and generate your own website.</p>
      </a>
    </Link>
  </Card>
)

export default CardHome