'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  const [name, setName] = useState("Avinash");
  // create function
  const apple = () => {
    // setName("Golu")
    setName((prevName) => (prevName === "Avinash" ? "Golu" : 'Avinash'))
  }
  // Inner Component
  const InnerComp = () => {
    return (
      <h1>Inner Component Page</h1>
    )
  }

  return (
    <main >
      <h1>Home Page</h1>

      {/* Linking in next js */}
      <Link href='/login'>Login Page</Link>


    </main>
  )
}
