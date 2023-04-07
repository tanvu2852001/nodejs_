const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/adminController');

adminController.index;

router.get('/stored/products', adminController.storedProducts);

module.exports = router;
