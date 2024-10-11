// controllers/studentController.js
const Student = require('../models/studentModel');

const studentController = {
    read(req, res) {
        Student.getAllStudents((err, data) => {
            if (err) {
                return res.status(500).send('Error fetching data');
            }
            res.render('index', { data });
        });
    },

    create(req, res) {
        const studentData = req.body; // Assuming you are using body-parser to get data from the form
        Student.createStudent(studentData, (err, id) => {
            if (err) {
                return res.status(500).send('Error creating student');
            }
            res.redirect('/'); // Redirect back to the main page after successful creation
        });
    },

    update(req, res) {
        const id = req.params.id; // Get ID from the URL
        const studentData = req.body;
        Student.updateStudent(id, studentData, (err, affectedRows) => {
            if (err) {
                return res.status(500).send('Error updating student');
            }
            res.redirect('/'); // Redirect back to the main page after successful update
        });
    },

    delete(req, res) {
        const id = req.params.id; // Get ID from the URL
        Student.deleteStudent(id, (err, affectedRows) => {
            if (err) {
                return res.status(500).send('Error deleting student');
            }
            res.redirect('/'); // Redirect back to the main page after successful deletion
        });
    },
};

module.exports = studentController;