const InputText = ({ label, setter, id, placeholder }) => (
  <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <input
      onChange={(event) => setter(event.target.value)}
      className="input"
      type="text"
      name={id}
      id={id}
      placeholder={placeholder}
      required
    />
  </div>
)

export default InputText