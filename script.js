// function handleSubmit(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const phoneNumber = document.getElementById('number').value;
//     const email = document.getElementById('email').value;

//     const namePattern = /^[A-Za-z\s]+$/;
//     if (!namePattern.test(name)) {
//         alert('Please enter a valid name containing only letters and spaces.');
//         return;
//     }

//     const phonePattern = /^\d{10}$/;
//     if (!phonePattern.test(phoneNumber)) {
//         alert('Please enter a valid phone number with exactly 10 digits.');
//         return;
//     }

//     const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//     if (!emailPattern.test(email)) {
//         alert('Please enter a valid email address ending with @gmail.com.');
//         return;
//     }

//     alert('Form submitted successfully!');
    
// }


function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('number').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('DOB').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    let isValid = true;

    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const ageError = document.getElementById('ageError');
    const addressError = document.getElementById('addressError');
    const dobError = document.getElementById('dobError');
    const genderError = document.getElementById('genderError');

    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    passwordError.textContent = '';
    ageError.textContent = '';
    addressError.textContent = '';
    dobError.textContent = '';
    genderError.textContent = '';

    // Name validation
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        nameError.textContent = 'Please enter a valid name (letters and spaces only).';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address ending with @gmail.com.';
        isValid = false;
    }

    // Phone number validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        phoneError.textContent = 'Please enter a valid phone number with exactly 10 digits.';
        isValid = false;
    }

    // Password validation (you can add your own rules here)
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Age validation (e.g., age must be between 18 and 100)
    if (age < 18 || age > 100) {
        ageError.textContent = 'Age must be between 18 and 100.';
        isValid = false;
    }

    // Address validation (e.g., cannot be empty)
    if (address.trim() === '') {
        addressError.textContent = 'Address cannot be empty.';
        isValid = false;
    }

    // DOB validation (check if selected)
    if (!dob) {
        dobError.textContent = 'Please enter your Date of Birth.';
        isValid = false;
    }

    // Gender validation
    if (!gender) {
        genderError.textContent = 'Please select your gender.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}
