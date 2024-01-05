
import { redirect } from "next/navigation"

export default function Study() {
    redirect('/login');
    return (
        <div>
            <h1>For Lecture for College</h1>
        </div>
    )
}