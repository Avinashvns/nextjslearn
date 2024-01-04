import Link from "next/link";
import ProductClient from "./productclient";

async function productList() {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json();
    return data.products;
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
                        <h3 key={index}>Name : {item.title}</h3>
                        <h4>Category :{item.category}</h4>
                        <br />
                        <ProductClient price={item.price} />
                    </div>
                ))
            }
            <Link href='/'>Go to Main Page</Link>
        </div>
    )
}