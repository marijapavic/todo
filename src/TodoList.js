import React, { useState } from "react"
import {observer} from "mobx-react"
import {v4 as uuid} from "uuid"

export const TodoList = observer(({todoStore}) => {
    const [newTodo, setNewTodo] = useState("")

    const handleChange = e => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(newTodo){
            todoStore.addTodo(newTodo)
            setNewTodo("")
        }
    }

    return(
        <div>
            <p className="p-status">tasks left: {todoStore.remainingTodos}/{todoStore.totalTodos}</p>
            <form className="form-container" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={newTodo}
                    onChange={handleChange}
                />
                <button className="submit-btn" type="submit">ADD</button>
            </form>
            
                
            
            <ul>{todoStore.todos.map(todo => {
                return (
                    <li className="li" key={uuid()} onClick={()=>{todoStore.toggleTodo(todo.id)}}>
                        
                            <span className={todo.completed ? "completed" : null}>
                                {todo.task}
                                <button className="delete-btn" onClick={(event) => todoStore.deleteTodo(todo.id)}>x</button>
                            </span>
                        
                    </li>
                )
                })}
            </ul>
        </div>
    )
})