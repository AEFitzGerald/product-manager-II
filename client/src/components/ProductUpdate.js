import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";



const ProductUpdate = () => {

    const history = useHistory(); 

    const { id } = useParams();

    const [productInfo, setProductInfo] = useState({})
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState('');
    // const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res)
                setProductInfo(res.data.Products);
            })
            .catch(err =>console.log("err", err))
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, productInfo)
            .then(res=> {
                console.log("After the put request -->", res)
                history.push("/"); 
            })
            .catch(err=> console.error(err));
    }

    const changeHandler = e => {
        console.log("*******updating the product")
        setProductInfo({
            ...productInfo,
            [e.target.name]:e.target.value
        })
    }


    return (
        <div> 
            <div className="d-flex justify-content-center mt-5">
                <div className = "card product-card">
                    <h5 className="px-3 pt-3">Update Product:</h5> 
                    <form 
                    onSubmit = { updateProduct } 
                    className="form-inline row g-3 align-items-center"
                    >   
                        <div className ="card-body">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend label-tab">
                                    <label className="input-group-text" htmlFor="inputGroupProducts">Title</label>
                                </div>
                                <input 
                                type="text"
                                name ="title"
                                value = { productInfo.title }   
                                onChange = { changeHandler }
                                className="flex-grow-1 formControl input-box"
                                /> 
                            </div>
                    
                            <div className="input-group mb-3">
                                <div className="input-group-prepend label-tab">
                                    <span className="input-group-text">Price</span>
                                </div>
                                <input 
                                type="number"
                                name ="price"  
                                value = { productInfo.price } 
                                onChange = { changeHandler }
                                className="flex-grow-1 formControl input-box"
                                /> 
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend label-tab">
                                    <label className="input-group-text" htmlFor="inputGroupProducts">Description</label>
                                </div>
                                <input 
                                type="text"
                                name ="description"  
                                value = { productInfo.description }
                                onChange ={ changeHandler }
                                className="flex-grow-1 formControl input-box"
                                /> 
                            </div>

                            <div className="input-group mb-3">
                                <div className="form-group">
                                    <input className = "btn add-product-btn shadow mb-3" 
                                    type="submit" 
                                    value="Submit"/>
                                </div>    
                            </div> 
                            
                        </div>    
                    </form> 
                </div> 
            </div>   
        </div>
    );
};


export default ProductUpdate;