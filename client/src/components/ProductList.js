import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const ProductList = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                console.log(res)
                setProducts(res.data.Products);
            })
            .catch(err => console.error(err));
    },[]);
    

    return (
        <div className="d-flex flex-column mx-5 my-5">
            <h6 className="product-details display-6">Product List</h6>
            {products.map( (product, i) =>
                <div className="mt-3" key = {i}>
                    <p className="product-details">• <em>{product.title}</em>, ${product.price}.00, {product.description}</p>
                    <Link className = "btn add-product-btn shadow mb-3" to={`/product/${product._id}`}>View Details</Link>
                    <hr className="product-divide"></hr>
                </div>
            )} 
        </div>
    );
};

export default ProductList;