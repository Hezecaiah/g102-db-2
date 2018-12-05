const db = require('../database-connection')

module.exports = {
    readAllStudents(){
        return db('students')
    }
}