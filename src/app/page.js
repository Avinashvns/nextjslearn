'use client'
import { useState } from 'react'
import styles from './page.module.css'

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
    <main className={styles.main}>
      <h1>Home Page</h1>
      <h4>Event ,function and State</h4>
      {name}
      {/* <button onClick={() => alert("Hello Next Js")}>Click me</button> */}
      <button onClick={apple}>Click me</button>

      {/* Use here component */}
      {/* <InnerComp /> */}

      {InnerComp()}
    </main>
  )
}
