const express = require('express')
const router = express.Router()

const petController = require('../app/controllers/petController')

petController.index

router.use('/:slug', petController.show)
router.use('/', petController.index)


module.exports = router