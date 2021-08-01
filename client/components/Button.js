const Button = ({ children, secondary }) => (
  <div className={`btn ${secondary ? 'btn-secondary' : ''}`}>
    { children }
  </div>
)

export default Button;