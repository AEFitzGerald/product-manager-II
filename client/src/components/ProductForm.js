import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const ProductForm = () => {
    
    const history = useHistory(); 

    let [oneProduct, setOneProduct] = useState({
        title: null,
        price: null,
        description: null,
    });

    let [validationErrors, setValidationErrors] = useState({})
        

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const changeHandler = e => {
        console.log("new product being entered...")
        console.log(e.target.name, e.target.value)

        setOneProduct({
            ...oneProduct,
            [e.target.name]:e.target.value
        })
        
    }
    

    const submitHandler = e => {
        setHasBeenSubmitted(true);
        e.preventDefault();

        console.log("the form has been submitted, yeah -->", oneProduct)

        axios.post("http://localhost:8000/api/product", oneProduct)
        .then(res=>{
            console.log("Just submitted data via post request and this is the response-->", res)
            if (res.data.err) { 
                setValidationErrors(res.data.err.errors)
            } else {

                setOneProduct({
                    title:"",
                    price: "",
                    description: "",

                })

                history.push("/"); 
            }
        })
        .catch(err=>console.log("err",err))

        
}
//     const deleteHandler = (delIndex) => {
//         const filterProductsList = productsList.filter((product, i) =>{
//         return i !== delIndex;
//     })
//     setProductsList(filterProductsList);
// } 


    return (
        <div className="d-flex justify-content-center mt-5">
            <div className = "card product-card">
            { hasBeenSubmitted ? 
                    <h5 className="px-3 pt-3">Thank you for adding a product!</h5>:
                    <h5 className="px-3 pt-3">Add a product to the database:</h5> 
                }
                <form 
                onSubmit = {(e) => {submitHandler(e)}} 
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
                            onChange ={(e)=> {changeHandler(e)}}
                            className="flex-grow-1 formControl input-box"
                            /> 
                            <p className="text-primary">{validationErrors.title? validationErrors.title.message: ""}</p>
                        </div>
                
                        <div className="input-group mb-3">
                            <div className="input-group-prepend label-tab">
                                <span className="input-group-text">Price</span>
                            </div>
                            <input 
                            type="number" 
                            name ="price"  
                            onChange ={(e)=> {changeHandler(e)}}
                            className="flex-grow-1 formControl input-box"
                            /> 
                            <p className="text-primary">{validationErrors.price? validationErrors.price.message: ""}</p>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend label-tab">
                                <label className="input-group-text" htmlFor="inputGroupProducts">Description</label>
                            </div>
                            <input 
                            type="text" 
                            name ="description"  
                            onChange ={(e)=> {changeHandler(e)}}
                            className="flex-grow-1 formControl input-box"
                            /> 
                            <p className="text-primary">{validationErrors.description? validationErrors.description.message: ""}</p>
                        </div>

                        <div className="input-group mb-3">
                            <div className="form-group">
                                <input className = "btn add-product-btn shadow mb-3" type="submit" value="Submit"/>
                            </div>    
                        </div>   
                    </div>    
                </form> 
            </div> 
        </div>
    );
};


export default ProductForm;