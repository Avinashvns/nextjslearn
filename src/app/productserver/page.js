import Link from "next/link";
import ProductClient from "./productclient";

async function productList() {
    let data = await fetch("https://dummyjson.com/users")
    data = await data.json();
    return data.users;
}

export default async function ProductServer() {
    let products = await productList();
    console.log(products)
    return (
        <div>
            <h1>Product List Api Call in Server Component</h1>
            <br />
            {
                products.map((item, index) => (
                    <div>
                        <h3 key={index}>Name : {item.lastName}</h3>
                        <h4>Category :{item.firstName}</h4>
                        <br />
                        <ProductClient price={item.age} />
                    </div>
                ))
            }
            <Link href='/'>Go to Main Page</Link>
        </div>
    )
}