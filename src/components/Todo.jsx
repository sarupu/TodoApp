import Button from "./Button"

function Todo({
  id,
  todo,
  body,
  isCompleted,
  handleDelete,
  handleComplete,
  handleClickEdit,
}) {
  return (
    <li className="flex gap-4 max-w-full content-center mt-3">
      <span
        className={`${
          isCompleted ? "line-through" : "no-underline"
        } bg-white rounded-md`}
      >
        {body}
      </span>

      <Button
        key={`check${id}`}
        isActive={true}
        onClick={() => {
          handleComplete({ ...todo, isCompleted: !isCompleted })
        }}
      >
        {isCompleted ? <span>Uncheck</span> : <span>Check</span>}
      </Button>

      <Button
        key={`edit${id}`}
        isActive={true}
        onClick={() => handleClickEdit(todo)}
      >
        Edit
      </Button>

      <Button
        key={`delete${id}`}
        isActive={true}
        onClick={(e) => {
          e.target.innerHTML = "Deleting"
          handleDelete(id)
        }}
      >
        Delete
      </Button>
    </li>
  )
}

export default Todo
