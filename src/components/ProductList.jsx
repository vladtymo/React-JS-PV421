import React, { useEffect, useState } from 'react'

const api = "https://fakestoreapi.com/products";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch(api).then(res => res.json()).then(arr => {
        //     console.log("Fetched data:", arr);
        //     setProducts(arr);
        // });

        loadProducts();
    }, []);

    async function loadProducts() {
        const res = await fetch(api);
        const arr = await res.json();
        setProducts(arr);
    }

    return (
        <>
            <h2>Product List</h2>
            <ul className="product-list">
                {products.map(i =>
                    <li key={i.id}>
                        <h3>{i.title}</h3>
                        <p>{i.price}$</p>
                        <span>{i.category}</span>
                    </li>)
                }
            </ul>
        </>
    )
}
