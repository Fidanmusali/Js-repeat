import React, { useState } from 'react'

const counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => { useState(count + 1) }}>+</button>
            <button onClick={() => { useState(count - 1) }}></button>
        </div>
    )
}

export default counter