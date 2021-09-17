import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setProduct(res.data.Products)
                console.log("***********One Product-->",res)
            })
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div className="d-flex justify-content-center">
            <div className = "card product-card mt-5 py-5 px-3" id ="show-one">
                <h6 className="product-details display-6">Product: <em>{product.title}</em></h6>
                <p className="product-details">Price: ${product.price}.00</p>
                <p className="product-details">Description: {product.description}</p>
            </div>
        </div>
    )
}
    
export default ProductDetail;