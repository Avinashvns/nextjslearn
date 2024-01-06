"use client"
import { useState } from "react"

export default function AddUser() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const addUser = async () => {
        // console.log("hi")
        // console.log(name, age, gender)
        let responseData = await fetch("http://localhost:3000/api/dj", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, age, gender })
        });
        responseData = await responseData.json();

        if (responseData.success) {
            // console.log(responseData.success);
            alert("User Creted")
        } else {
            alert("User not created");

        }
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