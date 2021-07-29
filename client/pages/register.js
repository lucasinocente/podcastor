import { useState } from 'react'
import { useRouter } from 'next/router'
import RegisterForm from '../components/RegisterForm'
import Title from '../components/Title'
import Podcast from '../lib/Podcast'
import Footer from '../components/Footer'

const podcast = new Podcast();

const Register = () => {
  const router = useRouter()
  const [slug, setSlug] = useState();
  const [rss, setRss] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await podcast.register({
        rss,
        slug,
      })

      alert('Success')

      router.push(event.target[0].value)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Title text="Registor 🦫" />
      <RegisterForm
        handleSubmit={handleSubmit}
        setRss={setRss}
        setSlug={setSlug}
      />
      <Footer />
    </>
  )
}

export default Register;