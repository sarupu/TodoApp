import { useState } from "react"
import {
  useCreateTodo,
  useDeleteTodo,
  useEditTodo,
  useGetTodos,
} from "../hooks/useFetch"
import ShortUniqueId from "short-unique-id"
import Todo from "../components/Todo"
import Button from "../components/Button"
import Modal from "../components/Modal"
import Input from "../components/Input"

const rui = new ShortUniqueId()

function Todos() {
  // usestate section -- start
  const [newTask, setNewTask] = useState({
    isCompleted: false,
    body: "",
    id: `${rui(6)}`,
  })
  const [changeTask, setChangeTask] = useState({
    isCompleted: false,
    body: "",
    id: "",
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalInput, setModalInput] = useState("")
  // usestate section -- end

  // Deconstruction of react query goodies
  const { isLoading, isError, error, data } = useGetTodos()
  const { mutate: createTodo, isLoading: isCreating } = useCreateTodo()
  const { mutate: deleteTodo, isLoading: isDeleting } = useDeleteTodo()
  const { mutate: changeComplete } = useEditTodo()
  const { mutate: editTodo } = useEditTodo()

  // handler section -- start
  const handleCreate = (newTask) => {
    setNewTask({
      isCompleted: false,
      body: "",
      id: `${rui(6)}`,
    })
    createTodo(newTask)
  }
  const handleDelete = (id) => deleteTodo(id)
  const handleComplete = (update) => {
    console.log(update)
    changeComplete(update)
  }
  const handleEditTodo = () => editTodo(changeTask)

  const handleChange = (value) => setNewTask({ ...newTask, body: value })
  const handleTaskChange = (value) => {
    setChangeTask({ ...changeTask, body: value })
    setModalInput(value)
  }
  const handleModal = (data) => {
    setChangeTask({ ...changeTask, id: data.id, body: data.body })
    setModalInput(data.body)
    setIsModalOpen(true)
  }
  // handler section -- end

  return (
    <div>
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)}>
          <Input value={modalInput} onChange={handleTaskChange} />
          <Button
            onClick={() => {
              handleEditTodo()
              setIsModalOpen(false)
            }}
            isActive={true}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              setIsModalOpen(false)
              setChangeTask({ ...changeTask, body: "" })
            }}
            isActive={true}
          >
            Cancel
          </Button>
        </Modal>
      )}
      {isLoading ? (
        <span>Loading...</span>
      ) : isError ? (
        <span>Error Message: {error}</span>
      ) : (
        <>
          <div className="flex items-baseline gap-2">
            <Input onChange={handleChange} value={newTask.body} />
            <Button
              key={"Submit"}
              isActive={newTask.body !== ""}
              onClick={() => handleCreate(newTask)}
            >
              {isCreating ? <span>Submiting</span> : <span>Submit</span>}
            </Button>
          </div>
          <ul>
            {data.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                body={todo.body}
                isCompleted={todo.isCompleted}
                isDeleting={isDeleting}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
                handleClickEdit={handleModal}
                todo={todo}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Todos
