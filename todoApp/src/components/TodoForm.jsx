import { useEffect, useRef } from "react"
import { useState } from "react"

export default function TodoForm({ todos, setTodos }) {
  const [input, setInput] = useState("")
  const inputRef = useRef("")

  const handleSubmit = () => {
    let myObj = {
      body: input,
      completed: false,
    }

    setTodos((prevArray) => [...prevArray, myObj])
  }
  useEffect(() => {
    let data = JSON.stringify(todos)
    localStorage.setItem("todos", data)
  }, [todos])
  return (
    <div className="m-5 flex justify-center">
      <input
        className="p-1  border-2 border-black rounded-xl focus:outline-none"
        placeholder="task"
        ref={inputRef}
        onChange={(e) => {
          setInput(e.target.value)
          console.log(inputRef.current.value)
          
        }}
      ></input>
      <button
        onClick={handleSubmit}
        className="border-2 border-black solid rounded-xl p-1"
      >
        +
      </button>
    </div>
  )
}
