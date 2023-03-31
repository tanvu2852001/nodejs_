const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/petshop_dev');
        console.log('Connect successfully !!!');
    } catch (error) {
        console.log('Connect failed!');
    }
}

module.exports = { connect };
