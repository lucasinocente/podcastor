import { useState } from 'react'
import { useRouter } from 'next/router'
import ValidateForm from '../../components/ValidateForm'
import Header from '../../components/Header'
import Title from '../../components/Title'
import Container from '../../components/Container'
import SubTitle from '../../components/SubTitle'

const Register = () => {
  const router = useRouter()
  const [validateCode, setValidateCode] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log({ validateCode })

    try {
    } catch (error) {
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

export default Register;