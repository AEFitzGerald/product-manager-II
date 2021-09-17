import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';




const ProductList = () => {
    
    const [products, setProducts] = useState([]);
    const history = useHistory(); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                console.log("***********Get all res-->", res)
                setProducts(res.data.Products);
            })
            .catch(err => console.error(err));
    },[]);


    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/'+id)
            .then(res => {
            console.log("*********Delete one res-->", res)
            removeFromDom(id)
            history.push('/')
            })
            .catch(err => console.error(err));
        }
    
    const removeFromDom = id => {
            setProducts(products.filter(product => product._id !== id));
        }

    

    return (
        <div className="d-flex flex-column mx-5 my-5">
            <h6 className="product-details display-6">Product List</h6>
            
            {
            products.map( (product, i) =>

                <div className="mt-3" key = { i} >
                    <p className="product-details">• <em>{product.title}</em>, ${product.price}.00, {product.description}</p>
                    
                    <Link 
                    to={`/product/${product._id}`}
                    className = "btn add-product-btn shadow mb-3"
                    >View Details</Link>

                    <Link 
                    to={`/product/update/${product._id}`}
                    className = "btn add-product-btn shadow mb-3" 
                    id ="update-btn"
                    >Update</Link>
                    
                    
                    <button
                    onClick={(e)=>{deleteProduct(product._id)}}
                    className = "btn add-product-btn shadow mb-3" 
                    id="delete-btn"
                    >
                        Delete
                    </button>

                    <hr className="product-divide"></hr>
                </div>
            )
            } 
        </div>
    );
};

export default ProductList;