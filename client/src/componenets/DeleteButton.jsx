import axios from "axios";
import React from "react";

const DeleteButton = (props) => {
    const prodId = props.prodId;
    const setUpdate = props.setUpdate;

    const clickHandler = (e) => {
        axios.delete("http://localhost:8000/api/products/delete/" + prodId)
            .then(res => {
                console.log(res.data);
                setUpdate(true);
            })
            .catch(err => console.error(err));
    }

    return (
        <button type={'button'} onClick={clickHandler} className='btn btn-danger'>Delete</button>
    );
}

export default DeleteButton;