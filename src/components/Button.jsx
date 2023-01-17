const Button = ({ onClick, isActive, children }) => {
  return (
    <button
      className={`${
        isActive ? "bg-orange-700" : "bg-gray-300 cursor-default"
      } text-white px-2 rounded-xl`}
      type="button"
      onClick={onClick}
      disabled={!isActive}
    >
      {children}
    </button>
  )
}

export default Button
