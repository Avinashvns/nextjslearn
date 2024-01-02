'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link';

// Navigation Hook
import { useRouter } from 'next/navigation';

export default function Home() {

  // object of Navigation
  const router = useRouter();


  return (
    <main >
      <h1>Home Page</h1>

      {/* Linking in next js */}
      <Link href='/login'>Login Page</Link>
      <br />
      {/* Button Navigation */}
      <button onClick={() => router.push('/login')}>Go Lo Login Page</button>


    </main>
  )
}
