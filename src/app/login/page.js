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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png" />
        </diV>
    )
}

export default Login;