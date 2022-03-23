import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="my-5">
            <h2>{product.title}</h2>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
        </div>
    );
}