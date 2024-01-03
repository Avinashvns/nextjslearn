'use client'

export default function Lecture({ params }) {
    return (
        <div>
            <h1>Day : {params.lecture[0]}</h1>
            <h1>Lecture : {params.lecture[1]}</h1>
        </div>
    )
}