const Input = ({ onChange, value, placeholder = "Enter a task" }) => {
  return (
    <input
      className="shadow-lg border-[1px] border-slate-900 outline-none w-[85%]"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input
