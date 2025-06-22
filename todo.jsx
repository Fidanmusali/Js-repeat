import React, { useState } from 'react'

const todo = () => {
    const [task, setTask] = useState('')
    const [todo, setTodo] = useState([])

    if (task.trim()) {
        setTodo([...todo, task])
        setTask('')
    }
    const Delete = (index) => {
        setTodo(todo.filter((_, i) => { i !== index }))
    }
    return (
        <div>
            <input
                type="text"
                value={task}
                placeholder='enter'
                onChange={(e) => setTask(e.target.value)} />
        </div>
    )
}

export default todo