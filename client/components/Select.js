const InputText = ({ label, setter, id }) => (
  <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <select
      className="input"
      name={id}
      id={id}
      onChange={(event) => setter(event.target.value)}
      required
    >
      <option>True</option>
      <option>False</option>
    </select>
  </div>
)

export default InputText