import Header from '../components/Header'
import Container from '../components/Container'
import Title from '../components/Title'
import CardHome from '../components/CardHome'

const Home = () =>  (
  <>
    <Header title="Podcastor 🦫" />
    <Container>
      <Title text="Gererate a website for your podcast with a simple RSS link" />
      <CardHome />
    </Container>
  </>
)

export default Home;