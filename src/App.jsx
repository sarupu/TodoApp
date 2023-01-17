import Header from "./components/Header"
import Auth from "./pages/Auth"
import Todos from "./pages/Todos"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="w-3/4 min-w-[435px]">
      <Header />
      <div className=" bg-emerald-700 flex justify-center items-center rounded-b-md py-10 px-5">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
