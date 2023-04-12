const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;

mongoose.plugin(slug)

const Product = new Schema(
    {
        name: { type: String, },
        price: { type: String },
        category: { type: String },
        quantity: { type: String },
        des: { type: String },
        thumbnail: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Product', Product);
