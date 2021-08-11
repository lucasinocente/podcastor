const InputText = ({ label, setter, id, placeholder, legend }) => (
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
    <div className="input-legend">
      <p>{legend}</p>
    </div>
  </div>
)

export default InputText