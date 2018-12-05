const express = require('express')
const router = express.Router()
const queries = require('../queries/students_queries')

router.get('/', (req, res) => {
    queries.readAllStudents().then(students => res.status(200).send({ students }))
})

module.exports = router