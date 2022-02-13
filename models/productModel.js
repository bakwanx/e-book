const Mongoose = require('mongoose');

var Schema = new Mongoose.Schema({
    UID:{ type: String },
    UserOwner:{ type: String },
    title:{ type: String },
    description:{ type: String },
    price:{ type: Number },
});

const ProductModel = Mongoose.model('product', Schema);

module.exports = ProductModel;