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
      <Title text="Registor 🦫" />
      <RegisterForm
        handleSubmit={handleSubmit}
        setRss={setRss}
        setSlug={setSlug}
        setEmail={setEmail}
        setName={setName}
      />
      <Footer />
    </>
  )
}

export default Register;