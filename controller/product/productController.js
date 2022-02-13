const ProductModel = require('../../models/productModel');

exports.getAll = async (req, res) => {
    const productModel = await ProductModel.find();
    console.log(productModel);
    res.send(productModel);
}