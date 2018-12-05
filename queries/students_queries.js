const db = require('../database-connection')

module.exports = {
    readAllStudents() {
        return db('students')
    },
    readStudentById(id) {
        return db('students').where('id', id).first()
    },
    createStudent(newStudent) {
        return db('students').insert(newStudent).returning('*')
    }
}