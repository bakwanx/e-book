const Express = require('express');
const Routes = Express.Router();

const productController = require('../controller/product/productController');

Routes.get('/', (req, res) => {
    res.render('pages/index');
});
Routes.get('/product', (req, res) => {
    res.render('pages/product');
});
Routes.get('/contact', (req, res) => {
    res.render('pages/contact');
});

Routes.get('/api/get/product', productController.getAll);

module.exports = Routes;