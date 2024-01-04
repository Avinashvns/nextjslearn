'use client'
import { useState } from "react";


const Login = () => {
    const [hstyle, setHstyle] = useState({ backgroundColor: 'yellow' })
    return (
        <diV>
            <h1 style={hstyle}>Login Page</h1>
        </diV>
    )
}

export default Login;