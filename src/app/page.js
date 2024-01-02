'use client'
import styles from './page.module.css'

export default function Home() {
  // create function
  const apple = () => {
    alert("friut");
  }
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <h4>Event ,function and State</h4>

      {/* <button onClick={() => alert("Hello Next Js")}>Click me</button> */}
      <button onClick={apple}>Click me</button>
    </main>
  )
}
