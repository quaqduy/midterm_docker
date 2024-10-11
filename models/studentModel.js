// models/studentModel.js
const connection = require('../DB/connectionDB');  

const Student = {
    // Get all students
    getAllStudents(callback) {
        connection.query('SELECT * FROM student', (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    // Create a new student
    createStudent(studentData, callback) {
        const { name, phone, address, email } = studentData;
        connection.query('INSERT INTO student (name, phone, address, email) VALUES (?, ?, ?, ?)', [name, phone, address, email], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    // Update a student
    updateStudent(id, studentData, callback) {
        const { name, phone, address, email } = studentData;
        connection.query('UPDATE student SET name = ?, phone = ?, address = ?, email = ? WHERE id = ?', [name, phone, address, email, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.affectedRows);
        });
    },

    // Delete a student
    deleteStudent(id, callback) {
        connection.query('DELETE FROM student WHERE id = ?', [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.affectedRows);
        });
    },
};

module.exports = Student;