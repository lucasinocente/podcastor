import InputText from './InputButton'

const RegisterForm = ({
  handleSubmit,
  slug,
  setSlug,
  setRss,
}) => {
  const legendSlug = `Your link will be: https://podcastor.me/${slug || 'choice-your-slug'}`
  const legendRSS = (
    <>
      At your anchor account you find at <a href="https://anchor.fm/dashboard/podcast/distribution">https://anchor.fm/dashboard/podcast/distribution</a>
    </>
  )

  return (
    <>
      <form className="card form" onSubmit={handleSubmit}>
        <InputText
          label="1) Choice your slug name:"
          id="slug"
          placeholder="slug-name"
          setter={setSlug}
          legend={legendSlug}
        />
        <InputText
          label="2) Paste your RSS feed:"
          id="feed"
          placeholder="https://anchor.fm/s/xpto/podcast/rss"
          setter={setRss}
          legend={legendRSS}
        />
        <hr className="spacer" />
        <input className="btn btn-lg btn-full" type="submit" value="Sign Up" />
      </form>
    </>
  )
}

export default RegisterForm