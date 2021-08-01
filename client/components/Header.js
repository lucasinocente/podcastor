import Link from "next/link"
import Button from './Button'

const Header = ({ title, image }) => (
  <div className="navbar">
    <div className="container">
      <div className="navbar-container">
        <Link href="/">
          <a className="navbar-title">
            <strong>
              {title}
            </strong>
          </a>
        </Link>
        <div className="navbar-right">
          <Link href="/signup">
            <a>
              <Button>
                Sign Up
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Header