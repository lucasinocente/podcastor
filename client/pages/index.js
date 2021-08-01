import Header from '../components/Header'
import Title from '../components/Title'
import CardHome from '../components/CardHome'

const Home = () =>  (
  <>
    <Header title="Podcastor 🦫" />
    <div className="container">
      <Title text="Gererate a website for your podcast with a simple RSS link" />
      <CardHome />
    </div>
  </>
)

export default Home;