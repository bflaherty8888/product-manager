import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import DeleteButton from "./DeleteButton";

export default (props) => {
    const [product, setProduct] = useState({});
    const [deleted, setDeleted] = useState(false);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (!deleted){
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err));
        } else {
            history.push("/");
        }
    }, [deleted]);

    return (
        <div className="my-5">
            <h2>{product.title}</h2>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
            <DeleteButton prodId={id} setUpdate={setDeleted} />
        </div>
    );
}