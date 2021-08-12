import { useState } from 'react'
import { useRouter } from 'next/router'
import ValidateForm from '../../components/ValidateForm'
import Header from '../../components/Header'
import Title from '../../components/Title'
import Container from '../../components/Container'
import SubTitle from '../../components/SubTitle'
import Podcast from '../../lib/Podcast'

const podcast = new Podcast();

const Validate = ({ id }) => {
  const router = useRouter()
  const [validateCode, setValidateCode] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await podcast.validate({
        id,
        validateCode,
      })

      console.log({
        id,
        validateCode,
      })

      // if(response.errors) {
      //   throw new Error(JSON.stringify(response.errors))
      // }

      alert('Apenas passando pra frente como se fosse um sucesso de verdade...');

      router.push('/emv')
    } catch (error) {
      alert(error)
      router.push('/emv')
    }
  }

  return (
    <>
      <Header title="Podcastor 🦫" />
      <Container>
        <Title text="Validate your acount:" />
        <SubTitle text="Paste below the code you receive in your e-mail:" />
        <ValidateForm
          handleSubmit={handleSubmit}
          setValidateCode={setValidateCode}
        />
      </Container>
    </>
  )
}

export async function getServerSideProps({ params: { id } }) {
  return {
    props: {
      id
    }
  }
}

export default Validate;