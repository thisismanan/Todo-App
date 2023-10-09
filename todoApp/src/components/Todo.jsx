import { useState } from "react"
import { useEffect } from "react"

export default function Todo({ todos, setTodos }) {
  const newTodos = [...todos]
  function handleAdd(idx) {
    newTodos[idx].completed = !newTodos[idx].completed
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    console.log(newTodos)
  }
  function handleDelete(idx) {
    console.log(idx)

    newTodos.splice(idx, 1)
    console.log(newTodos)

    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    console.log(newTodos)
  }

  return (
    <div className="prose m-5 flex  justify-center">
      {todos.map((a, idx) => (
        <div className="flex-col">
          <div className="flex " key={idx}>
            {todos[idx].completed ? (
              <div className="p-1 flex-col text-xl line-through opacity-20">
                {a.body}
              </div>
            ) : (
              <div className="p-1 text-xl">{a.body}</div>
            )}
            <button
              onClick={() => handleAdd(idx)}
              className="m-1 border-2 border-black solid rounded-xl p-0.5"
            >
              -
            </button>
            <button
              onClick={() => handleDelete(idx)}
              className="m-1 border-2 border-black solid rounded-xl p-0.5 bg-gradient-to-br from-red-100 via-red-400 to-zinc-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
