import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const getuser = async () => {
        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response);
        console.log(response.data);
        console.log(response.data.message);
        setmessage(response.data.message);
        setusers(response.data.data)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>API DEMO 2</h1>
            <button onClick={() => { getuser() }}>GET</button>
            <h2>Message:{message}</h2>
            {users.length > 0 && (
                <table border="1" align='center'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PASSWORD</th>
                            <th>AGE</th>
                            <th>isActive</th>
                            <th>__v</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.age}</td>
                                    <td>{user.isActive ? "Yes" : "No"}</td>
                                    <td>{user.__v}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            )
            }
        </div>
    )
}