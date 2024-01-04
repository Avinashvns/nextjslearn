

'use client'

export default function ProductClient({ price }) {
    console.log(price)
    return (
        <div>
            <button onClick={() => alert(price)}>Click me</button>
        </div>
    )
}