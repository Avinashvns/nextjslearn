import Link from "next/link";


export default function StudentList() {
    return (
        <div>
            <h1>
                Student List page
            </h1>
            <br />
            <ul>
                <li> <Link href="/studentlist/1">Anil</Link></li>
                <li> <Link href="/studentlist/2">Avinash</Link></li>
                <li> <Link href="/studentlist/3">Abhishek</Link></li>
                <li> <Link href="/studentlist/4">Anuradha</Link></li>

            </ul>
        </div>
    )
}