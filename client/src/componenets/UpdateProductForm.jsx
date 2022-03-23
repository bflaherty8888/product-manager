import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const UpdateProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
    });

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/update/" + id, { title, price, description })
            .then(res => history.push("/" + id))
            .catch(err => console.error(err));
    }

    return (
        <>
            <form className='form-control w-50 mx-auto p-3' onSubmit={submitHandler}>
                <p>
                    <label className='form-label'>Title</label>
                    <input type={'text'} className='form-control' onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                <label className='form-label'>Price</label>
                <input type={'number'} className='form-control' onChange={(e) => setPrice(e.target.value)} value={price} step={'0.01'} />
                </p>
                <p>
                <label className='form-label'>Description</label>
                <textarea className='form-control' onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <input type={'submit'} className='form-control btn btn-primary' value={'Submit'} />
            </form>
        </>
    );
}

export default UpdateProductForm;