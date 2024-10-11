const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route to get all students
router.get('/', (req, res) => {
    studentController.read(req, res);
});

// Route to create a new student
router.post('/students', (req, res) => {
    studentController.create(req, res);
});

// Route to get a specific student by ID (for editing)
router.get('/students/:id', (req, res) => {
    const studentId = req.params.id;
    studentController.getStudentById(studentId, (err, student) => {
        if (err) {
            return res.status(500).send('Error fetching student');
        }
        res.render('editStudent', { student }); // Render the edit form with student data
    });
});

// Route to update a student
router.put('/students/:id', (req, res) => {
    studentController.update(req, res);
});

// Route to delete a student
router.delete('/students/:id', (req, res) => {
    studentController.delete(req, res);
});

module.exports = router;
