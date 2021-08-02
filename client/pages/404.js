import Header from '../components/Header';
import Container from '../components/Container';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';

const Custom404 = () => {
  return (
    <>
      <Header />
      <Container>
        <Title text="Error 404" />
        <SubTitle text="Podcast not found." />
      </Container>
    </>
  )
}

export default Custom404;