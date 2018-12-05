const express = require('express')
const router = express.Router()
const queries = require('../queries/students_queries')

router.get('/', (req, res) => {
    queries.readAllStudents().then(students => res.status(200).send({ students }))
})

router.get('/:id', (req, res) => {
    queries.readStudentById(req.params.id).then(student => res.status(200).send({ student }))
})

router.post('/', (req, res) => {
    queries.createStudent(req.body).then(newStudent => res.status(201).send(newStudent))
})

router.put('/:id', (req, res) => {
    queries.updateStudent(req.params.id, req.body).then(updatedStudent => res.status(200).send(updatedStudent))
})

router.delete('/:id', (req, res) => {
    queries.deleteStudent(req.params.id).then(deletedStudent => res.status(204).send(deletedStudent[0]))
})

module.exports = router