document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.getElementById('formMessage').textContent = '';

    // Retrieve form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const career = document.getElementById('career').value.trim();

    let isValid = true;

    // Validation criteria
    if (!name || name.length < 3 || /\d/.test(name)) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long and contain no numbers.';
        isValid = false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (!age || isNaN(age) || age < 18 || age > 100) {
        document.getElementById('ageError').textContent = 'Age must be a number between 18 and 100.';
        isValid = false;
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits long.';
        isValid = false;
    }

    if (!career) {
        document.getElementById('careerError').textContent = 'Please select a career field of interest.';
        isValid = false;
    }

    if (isValid) {
        // Submit the form if valid
        this.submit();
    } else {
        document.getElementById('formMessage').textContent = 'Please correct the errors and try again.';
    }
});
