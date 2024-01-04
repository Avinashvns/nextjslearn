'use client'
import { useState } from "react";
import custom from '../custom.module.css'

import Image from "next/image"
import Profile from '../../../public/vercel.svg'


const Login = () => {
    console.log(Profile)
    const [hstyle, setHstyle] = useState({ backgroundColor: 'yellow' })
    return (
        <diV>
            <h1 style={hstyle}>Login Page</h1>

            <h2 className={custom.main}>Custom Module uses</h2>
            <Image src={Profile} />
            <br />
            <img src={Profile.src} />
        </diV>
    )
}

export default Login;