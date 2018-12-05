const db = require('../database-connection')

module.exports = {
    readAllStudents() {
        return db('students').orderBy('id')
    },
    readStudentById(id) {
        return db('students').where('id', id).first()
    },
    createStudent(newStudent) {
        return db('students').insert(newStudent).returning('*')
    },
    updateStudent(id, updatedInfo) {
        return db('students').update(updatedInfo).where('id', id).returning('*')
    },
    deleteStudent(id) {
        return db('students').where('id', id).del().returning('*')
    }
}