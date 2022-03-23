import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const ProductList =  (props) => {
    const [products, setProducts] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.products))
            .catch(err => console.error(err));
    }, [update]);

    return (
        <>
            <h2 className="my-4">All Products:</h2>
            {products.map((product, i) => {
                return (
                    <p key={i}><Link to={`/${product._id}`} className='link-primary text-decoration-none'>{product.title}</Link> <DeleteButton prodId={product._id} setUpdate={setUpdate} /></p>
                );
            })}
        </>
    );
}

export default ProductList;