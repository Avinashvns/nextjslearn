"use client"
import Script from "next/script";

export default function Contact() {
    return (
        <div>
            <h1>Contact page</h1>
            <Script src='/location.js'
                onLoad={() => {
                    console.log("File Loaded")
                }} />
            <h1>Get User getLocation</h1>

        </div>
    )
}
