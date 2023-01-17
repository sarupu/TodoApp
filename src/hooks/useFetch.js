import axios from "axios"
import { useQueryClient, useMutation, useQuery } from "react-query"

const instance = axios.create({
  baseURL: "https://63b534630f49ecf5089d7052.mockapi.io/",
})

export const useGetTodos = () => {
  return useQuery("getTodos", async () => {
    const { data } = await instance.get("todos/")

    return data
  })
}

export const useCreateTodo = () => {
  const queryClient = useQueryClient()
  return useMutation(async (todo) => await instance.post(`todos/`, todo), {
    onSuccess: () => queryClient.invalidateQueries("getTodos"),
  })
}

export const useDeleteTodo = () => {
  const queryClient = useQueryClient()
  return useMutation(async (id) => await instance.delete(`todos/${id}`), {
    onSuccess: () => queryClient.invalidateQueries("getTodos"),
  })
}

export const useEditTodo = () => {
  const queryClient = useQueryClient()
  return useMutation(
    async (update) => await instance.put(`todos/${update.id}`, update),
    {
      onSettled: (e) => {
        console.log(e.data)
        queryClient.invalidateQueries("getTodos")
      },
    }
  )
}

// const deleteTodo = useCallback(async (id) => {
//   await axios.delete(`todos/${id}`)
//   return getTodos()
// })
