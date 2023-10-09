import { useState } from "react"

import "./App.css"
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"

function App() {
  const [todos, setTodos] = useState(() => {
    let data = localStorage.getItem("todos")
    if (data) {
      data = JSON.parse(data)
      return [...data]
    } else {
      return []
    }
  })

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <header>
        <h1 className="italic flex justify-center text-2xl">Todo List</h1>
      </header>
      <TodoForm todos={todos} setTodos={setTodos} />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
