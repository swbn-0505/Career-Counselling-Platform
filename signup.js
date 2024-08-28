window.onload = function() {
    document.getElementById('signupForm').onsubmit = function(event) {
        event.preventDefault(); // Prevent form submission for testing

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var age = document.getElementById('age').value;
        var phone = document.getElementById('phone').value;
        var career = document.getElementById('career').value;
        var errorMessage = '';

        // Check if name is empty or less than 3 characters
        if (name.trim() === '' || name.length < 3) {
            errorMessage += 'Name must be at least 3 characters long.<br>';
        }

        // Check if email is in the correct format
        if (!email.includes('@')) {
            errorMessage += 'Please enter a valid email address.<br>';
        }

        // Check if age is a positive number and not more than 120
        if (age <= 0 || isNaN(age) || age > 120) {
            errorMessage += 'Please enter a valid age between 1 and 120.<br>';
        }

        // Check if phone number is exactly 10 digits long and numeric
        if (phone.length !== 10 || isNaN(phone)) {
            errorMessage += 'Please enter a valid 10-digit phone number.<br>';
        }

        // Check if a career field is selected
        if (career === '') {
            errorMessage += 'Please select a career field of interest.<br>';
        }

        // If there are any errors, prevent form submission and show errors
        if (errorMessage) {
            document.getElementById('errorMessage').innerHTML = errorMessage;
        } else {
            // Redirect to the dashboard
            window.location.href = 'dashboard.html';
        }

    };
};
