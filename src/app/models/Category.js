const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Category = new Schema(
    {
        name: { type: String },
    },
    {
        timestamps: true,
    },
);

//Add plugins
mongoose.plugin(slug);
Category.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Category', Category);
