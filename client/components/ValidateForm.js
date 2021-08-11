import InputText from './InputButton'

const ValidateForm = ({
  handleSubmit,
  setValidateCode,
}) => {
  const digitsLength = 6;
  const retryValidationEmail = (event) => event.preventDefault()
  const legendValidate = (
    <>
      Not receive the email?
      <button
        className="btn btn-sm"
        onClick={retryValidationEmail}
      >
        Click here to try again.
      </button>
    </>
  )

  return (
    <>
      <form className="card form" onSubmit={handleSubmit}>
        <InputText
          label={`Paste the ${digitsLength} digits code from your email:`}
          id="validateCode"
          placeholder="132134"
          maxLength={digitsLength}
          setter={setValidateCode}
          legend={legendValidate}
        />
        <hr className="spacer" />
        <input className="btn btn-lg btn-full" type="submit" value="Validate account" />
      </form>
    </>
  )
}

export default ValidateForm