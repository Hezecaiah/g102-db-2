var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('yeah yeah yeah you got it')
})

module.exports = router