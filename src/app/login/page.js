'use client'
import { useState } from "react";
import custom from '../custom.module.css'


const Login = () => {
    const [hstyle, setHstyle] = useState({ backgroundColor: 'yellow' })
    return (
        <diV>
            <h1 style={hstyle}>Login Page</h1>

            <h2 className={custom.main}>Custom Module uses</h2>
        </diV>
    )
}

export default Login;