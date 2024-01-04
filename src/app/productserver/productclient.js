

'use client'

export default function ProductClient(props) {
    console.log(props)
    return (
        <div>
            <button onClick={() => alert(props.price)}>Click me</button>
        </div>
    )
}