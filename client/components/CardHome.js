import Link from 'next/link'
import Card from './Card'

const CardHome = () => (
  <Card>
    <Link href="/signup">
      <a>
        <h2>Sign Up &rarr;</h2>
        <p>Create your free account and generate your own podcast website.</p>
      </a>
    </Link>
  </Card>
)

export default CardHome