const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Product = new Schema({
    name: {type: String, default: 'cat'},
    price: {type: String, default: 'cat'},
    category: {type: String, default: 'cat'},
    quantity: {type: String, default: 'cat'},
    des: {type: String, default: 'cat'},
    thumbnail: {type: String, default: 'cat'},
    created_date: {type: Date, default: Date.now},
    updated_date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Product', Product);