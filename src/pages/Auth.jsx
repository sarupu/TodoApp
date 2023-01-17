import { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"

function Auth() {
  const [user, setUser] = useState("")

  const navigate = useNavigate()

  const isLoginValid = user.length > 2

  // it controls if the user logged in or not, I scratched that idea tho
  // useEffect(() => {
  //   const userName = localStorage.getItem("user")
  //   userName !== null ? navigate("/todos") : false
  // }, [])

  const handleChange = (value) => {
    setUser(value)
  }
  const handleLogin = useCallback(() => {
    // it used to store the user name but i chose not to used that part
    // localStorage.setItem("user", user)
    navigate("/todos")
  })

  return (
    <div className="flex flex-col items-stretch border-2 rounded-md gap-3 py-2 px-5">
      <p className="text-white border-b">
        Nickname must be at least 3 characters
      </p>

      <div className="w-[118%]">
        <Input placeholder="Please enter a nickname" onChange={handleChange} />
      </div>
      <Button key={"Login"} isActive={isLoginValid} onClick={handleLogin}>
        Login
      </Button>
    </div>
  )
}

export default Auth
