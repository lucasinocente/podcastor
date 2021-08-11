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

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const {
        errors,
      } = await podcast.register({
        rss,
        slug,
      })

      if(errors) {
        throw new Error({ errors })
      }

      alert('Sucesso!');

      router.push(slug)
    } catch (error) {
      alert(JSON.stringify(error))
    }
  }

  return (
    <>
      <Header title="Podcastor 🦫" />
      <Container>
        <Title text="Create your acount:" />
        <SubTitle text="Welcome do Podcastor 🦫" />
        <SubTitle text="Let's create your account:" />
        <RegisterForm
          handleSubmit={handleSubmit}
          slug={slug}
          setSlug={setSlug}
          setRss={setRss}
        />
      </Container>
    </>
  )
}

export default Register;