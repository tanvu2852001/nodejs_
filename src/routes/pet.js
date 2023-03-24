const express = require('express');
const router = express.Router();

const petController = require('../app/controllers/petController');

petController.index;

router.get('/:slug', petController.show);
router.get('/', petController.index);

module.exports = router;
