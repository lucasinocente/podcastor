import PageForm from '../../../../components/PageForm'
import Header from '../../../../components/Header'
import Title from '../../../../components/Title'
import Container from '../../../../components/Container'

const CreatePage = () => {
  return (
    <>
      <Header title="title" />
      <Container>
        <Title text="Edit Lorem Ipsum page:" />
        <PageForm />
      </Container>
    </>
  )
}

export default CreatePage;