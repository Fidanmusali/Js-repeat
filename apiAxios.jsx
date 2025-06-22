import React from 'react'
import axios from 'axios';


const apiAxios = () => {

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUser(response.data))
            .catch(error => console.error('error', error))
    }, [])
    const newuser = {
        name: "fidan",
        age: 20
    }
    axios.get('https://jsonplaceholder.typicode.com/users', newuser)
        .then(response => console.log(response.data)
            .catch(err => console.log(err)
            )
        )

    return (
        <div>apiAxios</div>
    )
}

export default apiAxios


