'use client'
import Link from "next/link";

import './about.css'
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            {
                pathName !== '/about/aboutstudent' ?
                    <ul className="about-menu">
                        <li>
                            <h4>About Navbar</h4>
                        </li>
                        <li>
                            <Link href='/about'>About Page</Link>
                        </li>
                        <li>
                            <Link href='/about/aboutcollege'>About College</Link>
                        </li>
                        <li>
                            <Link href='/about/aboutstudent'>About Student</Link>
                        </li>
                    </ul>
                    : null
            }
            {
                children
            }
        </div>
    )
}