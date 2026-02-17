import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo3 = () => {

    const [users, setUsers] = useState([])

    const getuser = async () => {
        const response = await axios.get("https://dummyjson.com/comments")
        console.log(response.data)
        setUsers(response.data.comments)
    }

    return (
        <div style={{ textAlign: "center"}}>
            <h1>API DEMO 3</h1>

            <button onClick={getuser}>GET</button>

            {users.length > 0 && (
                <table border="1" align="center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>BODY</th>
                            <th>POST ID</th>
                            <th>LIKES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.body}</td>
                                <td>{user.postId}</td>
                                <td>{user.likes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
