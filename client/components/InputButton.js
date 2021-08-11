const InputText = ({ label, setter, id, placeholder, legend, maxLength }) => (
  <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <input
      onChange={(event) => setter(event.target.value)}
      className="input"
      type="text"
      name={id}
      id={id}
      placeholder={placeholder}
      maxLength={maxLength}
      required
    />
    <div className="input-legend">
      <p>{legend}</p>
    </div>
  </div>
)

export default InputText