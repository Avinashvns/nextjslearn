
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <User />
    </main>
  )
}


const User = () => {
  return (
    <div>
      <h2>User name is Avinash</h2>
    </div>
  );
}