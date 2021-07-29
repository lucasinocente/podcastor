import Link from "next/link"

const Header = ({ title, image }) => (
  <div className="navbar">
    <div>
      <img src={image} height="55" />
    </div>
    <div>
      <Link href="/">
        <a>
          {title}
        </a>
      </Link>
    </div>
  </div>
)

export default Header