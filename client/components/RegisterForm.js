const RegisterForm = ({
  handleSubmit,
  setSlug,
  setRss,
}) => (
  <form className="card" onSubmit={handleSubmit}>
    <h2>Create your Podcastor Page</h2>
    <div>
      <label htmlFor="slug">Choice your slug name:</label>
      <input
        onChange={(event) => setSlug(event.target.value)}
        className="input"
        type="text"
        name="slug"
        id="slug"
        placeholder="podcastor.me/slug"
        required
      />
    </div>
    <div>
      <label htmlFor="feed">Paste your RSS feed:</label>
      <input
        onChange={(event) => setRss(event.target.value)}
        className="input"
        type="text"
        name="feed"
        id="feed"
        placeholder="https://anchor.fm/s/xpto/podcast/rss"
        required
      />
    </div>
    <input className="button" type="submit" value="Register" />
  </form>
)

export default RegisterForm