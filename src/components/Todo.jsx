import React, { useState } from 'react'

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    return (
        <div>
            {todos.map(todo => {
                return (
                    <div>
                        {todo}
                    </div>
                )
            })}
            ADD TODO:<input id="todo" onChange={e => {
                setTodo(e.target.value)
            }} placeholder="add todo" />
            <button onClick={() => {
                setTodos([todo, ...todos])
                document.getElementById("todo").value = ""
            }}>ADD</button>
        </div>
    )
}