import Link from "next/link"

const Footer = () => (
  <footer className="footer">
    <Link href="/">
      <a>
        Powered by{' '}
        <strong>Podcastor 🦫</strong>
      </a>
    </Link>
  </footer>
)

export default Footer