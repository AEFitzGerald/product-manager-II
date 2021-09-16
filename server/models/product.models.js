const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "This is required"], 
        minlength: [5, "Title must be 5 characters long"]
    },
    price: { 
        type: Number, 
        required: [true, "This is required"], 
    },
    description: {
        type: String, 
        required: [true, "This is required"],
        minlength: [5, "Description must be 5 characters long"]
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;