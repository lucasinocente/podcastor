import Link from "next/link"
import Button from './Button'

const Header = ({ title = "Podcastor 🦫", image = null }) => (
  <div className="navbar">
    <div className="container">
      <div className="navbar-container">
        <Link href="/">
          <a className={`navbar-title ${image ? 'navbar-with-image' : ''}`}>
            {image && (
              <div className="navbar-image">
                <img src={image} height="89" />
              </div>
            )}
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