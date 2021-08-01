import InputText from './InputButton'

const RegisterForm = ({
  handleSubmit,
  setSlug,
  setRss,
  setEmail,
  setName,
}) => (
  <>
  <form className="card form" onSubmit={handleSubmit}>
    <InputText
      label="Choice your slug name:"
      id="slug"
      placeholder="slug-name"
      setter={setSlug}
    />
    <InputText
      label="Paste your RSS feed:"
      id="feed"
      placeholder="https://anchor.fm/s/xpto/podcast/rss"
      setter={setRss}
    />
    <InputText
      label="Tell us your name:"
      id="name"
      placeholder="Joe Doe"
      setter={setName}
    />
    <InputText
      label="Tell us your email:"
      id="email"
      placeholder="email@email.com"
      setter={setEmail}
    />
    <hr className="spacer" />
    <input className="btn btn-lg btn-full" type="submit" value="Sign Up" />
  </form>
</>
)

export default RegisterForm