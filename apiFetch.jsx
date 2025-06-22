import React, { useState } from 'react'
const [users, setUsers] = useState()

const apiFetch = () => {
    useEffect(() => {
        fetch('ttps://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error('error:', error)
            )
    }, [])

    const newUser = {
        name: "Fidan",
        email: "fidan@example.com"
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
        .then(res => res.json())
        .then(data => console.log('elave edildi', data)
            .catch(error => console.error(error))
        )

    return (
        <div>apiFetch</div>
    )
}

export default apiFetch


