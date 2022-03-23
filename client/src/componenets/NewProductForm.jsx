import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewProductForm =  (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState("");
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", {
            title,
            price,
            description
        })
            .then(res => history.push("/"))
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

export default NewProductForm;