document.getElementById('form1').addEventListener('submit', function(event) {
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function (errorDiv) {
        errorDiv.textContent = '';
    });

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone_number = document.getElementById('phone_number').value.trim();
    const birthday = document.getElementById('birthday').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const medical_area = document.querySelectorAll('input[name="medical_area"]:checked');
    const qualification = document.getElementById('qualification').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const checkbox = document.getElementById('checkbox').checked;

    let isValid = true;

    // Validation checks
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First Name is required';
        isValid = false;
    }
    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last Name is required';
        isValid = false;
    }
    if (!email) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    if (!phone_number) {
        document.getElementById('phone_numberError').textContent = 'Please enter a valid phone number';
        isValid = false;
    }
    if (!birthday) {
        document.getElementById('birthdayError').textContent = 'Birthday is required';
        isValid = false;
    }
    if (!gender || gender === '--Please choose an option--') {
        document.getElementById('genderError').textContent = 'Gender is required';
        isValid = false;
    }
    if (medical_area.length === 0) {
        document.getElementById('medical_areaError').textContent = 'Medical area is required';
        isValid = false;
    }
    if (!qualification || qualification === '--Please choose an option--') {
        document.getElementById('qualificationError').textContent = 'Qualification is required';
        isValid = false;
    }
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    }
    if (password.length < 5 || password.length > 12 ||
        !/^(?=(.*[A-Z]){2})/.test(password) ||
        !/\d/.test(password) ||
        !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be between 5 to 12 characters long, contain at least two uppercase letters, one number and one special character';
        isValid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }
    if (!checkbox) {
        document.getElementById('checkboxError').textContent = 'You must agree to the terms and conditions';
        isValid = false;
    }

    // If form is not valid, prevent submission
    if (!isValid) {
        event.preventDefault();
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});