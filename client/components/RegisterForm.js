const RegisterForm = ({
  handleSubmit,
  setSlug,
  setRss,
  setEmail,
  setName,
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
    <div>
      <label htmlFor="name">Name:</label>
      <input
        onChange={(event) => setName(event.target.value)}
        className="input"
        type="text"
        name="name"
        id="name"
        placeholder="João Fazedor"
        required
      />
    </div>
    <div>
      <label htmlFor="email">Email:</label>
      <input
        onChange={(event) => setEmail(event.target.value)}
        className="input"
        type="text"
        name="email"
        id="email"
        placeholder="email@email.com"
        required
      />
    </div>
    <input className="button" type="submit" value="Register" />
  </form>
)

export default RegisterForm