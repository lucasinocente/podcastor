const InputText = ({ label, setter, id, placeholder }) => (
  <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <textarea
      onChange={(event) => setter(event.target.value)}
      className="input"
      type="text"
      name={id}
      id={id}
      placeholder={placeholder}
      rows="13"
      required
    >
    </textarea>
  </div>
)

export default InputText