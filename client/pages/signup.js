import { useState } from 'react'
import { useRouter } from 'next/router'
import RegisterForm from '../components/SignUpForm'
import Header from '../components/Header'
import Title from '../components/Title'
import Podcast from '../lib/Podcast'
import Container from '../components/Container'
import SubTitle from '../components/SubTitle'

const podcast = new Podcast();

const Register = () => {
  const router = useRouter()
  const [slug, setSlug] = useState();
  const [rss, setRss] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const {
        errors,
      } = await podcast.register({
        rss,
        slug,
        email,
        name,
      })

      if(errors) {
        throw new Error(errors)
      }

      alert('Sucesso!');

      router.push(slug)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Header title="Podcastor 🦫" />
      <Container>
        <Title text="Create your free acount:" />
        <SubTitle text="Welcome do Podcastor 🦫" />
        <SubTitle text="Let's create your free account:" />
        <RegisterForm
          handleSubmit={handleSubmit}
          setRss={setRss}
          setSlug={setSlug}
          setEmail={setEmail}
          setName={setName}
        />
      </Container>
    </>
  )
}

export default Register;