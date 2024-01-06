"use client"

import { useState } from "react"

export default function AddUser() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const addUser = () => {
        console.log("hi")
        console.log(name, age, gender)
    }

    return (
        <div>
            <h1>Add User</h1>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <br />
            <input type="text" placeholder="Enter Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            <br />
            <button onClick={addUser} >Add User</button>
        </div>
    )
}