import { useState } from 'react'
import { useRouter } from 'next/router'
import SignUpForm from '../components/SignUpForm'
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
      const response = await podcast.register({
        rss,
        slug,
      })

      // if(response.errors) {
      //   throw new Error(JSON.stringify(response.errors))
      // }

      alert('Apenas passando pra frente como se fosse um sucesso de verdade...');

      router.push('validate/xpto')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Title text="Create your account" />
        <SubTitle text="Welcome to Podcastor!" />
        <SubTitle text="Let's create your account:" />
        <SignUpForm
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