import Link from 'next/link'
import Card from './Card'

const CardHome = () => (
  <Card>
    {/* <Link href="/signup">
      <a>
        <h2>Sign Up &rarr;</h2>
        <p>Create your account and generate your own podcast website.</p>
      </a>
    </Link> */}

    <Link href="https://forms.gle/VQnt3swnvapTzFYU9">
      <a>
        <h2>Cadastro Para Versão Beta &rarr;</h2>
        <p>Prencha com suas informações o formulário a seguir para ser avisado em primeira mão do lançamento.</p>
      </a>
    </Link>
  </Card>
)

export default CardHome