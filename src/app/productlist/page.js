"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await fetch("https://dummyjson.com/products");
                data = await data.json();
                // console.log(data);
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    console.log("Data : ", products)
    return (
        <div>
            <h1>Product List</h1>

            {
                products.map((item, index) => (
                    <div key={index}>
                        <h3 >Name : {item.title}</h3>
                        <h3 >Caterogy : {item.category}</h3>
                    </div>
                ))
            }
            <Link href="/">Go to Home page</Link>
        </div>
    )
}