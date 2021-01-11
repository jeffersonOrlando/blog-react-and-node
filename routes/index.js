const express = require('express')
const router = express.Router()


router.use('/', require('./post'))
router.use('/', require('./comments'))

module.exports = router