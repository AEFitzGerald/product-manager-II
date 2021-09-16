const ProductController = require('../controllers/product.controllers');

module.exports = app => {
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.post('/api/product', ProductController.createNewProduct);
    app.delete('/api/product/:id', ProductController.deleteOneProduct);
}