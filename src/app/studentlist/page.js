import Link from "next/link";


export default function StudentList() {
    return (
        <div>
            <h1>
                Student List page
            </h1>
            <br />
            <ul>
                <li> <Link href="/studentlist/anil">Anil</Link></li>
                <li> <Link href="/studentlist/avinash">Avinash</Link></li>
                <li> <Link href="/studentlist/abhishek">Abhishek</Link></li>
                <li> <Link href="/studentlist/anuradha">Anuradha</Link></li>
            </ul>
        </div>
    )
}