import InputText from './InputButton'
import Select from './Select'
import Textarea from './Textarea'

const RegisterForm = () => (
  <>
  <form className="card form" onSubmit={() => ''}>
    <InputText
      label="Title:"
      id="feed"
      placeholder="My Title"
      setter={() => ''}
    />
    <InputText
      label="Slug name:"
      id="slug"
      placeholder="slug-name"
      setter={() => ''}
    />
    <Select
      label="Active:"
      id="slug"
      setter={() => ''}
    />
    <Textarea
      label="Content: (You can use markedown)"
      id="email"
      placeholder="email@email.com"
      setter={() => ''}
    />
    <hr className="spacer" />
    <input className="btn btn-lg btn-full" type="submit" value="Create page" />
  </form>
</>
)

export default RegisterForm