'use client'

export default function Student({ params }) {
    return (
        <div>
            <h1>Student List </h1>
            <br />
            <h2>Name : {params.student}</h2>
        </div>
    )
}