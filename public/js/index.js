function editStudent(button) {
    // Show the edit modal
    document.getElementById('editStudentModal').style.display = 'block';

    // Access data attributes from the button
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const phone = button.getAttribute('data-phone');
    const address = button.getAttribute('data-address');
    const email = button.getAttribute('data-email');

    // Fill the form with the student data
    document.getElementById('edit-id').value = id;
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-phone').value = phone;
    document.getElementById('edit-address').value = address;
    document.getElementById('edit-email').value = email;

    // Set the form action attribute (for submitting the edited student details)
    const editForm = document.querySelector('#editForm');
    editForm.setAttribute('action', `/students/${id}?_method=PUT`);
}


function closeEditModal() {
    document.getElementById('editStudentModal').style.display = 'none';
}

// Global variable to hold the student ID to delete
let studentIdToDelete = null;

// Function to confirm deletion
function confirmDeleteStudent(id) {
    studentIdToDelete = id; // Store the ID to delete
    document.getElementById('deleteStudentModal').style.display = 'block'; // Show the modal

    const confirmDeleteForm = document.querySelector('#confirmDeleteForm');
    confirmDeleteForm.setAttribute('action', `/students/${id}?_method=DELETE`);

}

// Function to close the delete modal
function closeDeleteModal() {
    document.getElementById('deleteStudentModal').style.display = 'none'; // Hide the modal
}

function openAddStudentModal() {
    const modal = document.getElementById('addStudentModal');
    modal.style.display = 'flex';
}

function closeAddModal() {
     const modal = document.getElementById('addStudentModal');
    modal.style.display = 'none';
}
