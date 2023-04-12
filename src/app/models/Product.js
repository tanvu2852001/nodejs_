const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        name: { type: String, },
        price: { type: String },
        category: { type: String },
        quantity: { type: String },
        des: { type: String },
        thumbnail: { type: String },
        slug: { type: String, unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Product', Product);
