window.onload = function() {
    document.getElementById('signupForm').onsubmit = function(event) {
        event.preventDefault(); // Prevent default form submission

        var formData = new FormData(document.getElementById('signupForm'));
        var errorMessage = '';

        // Check if name is empty or less than 3 characters
        if (!formData.get('name').trim() || formData.get('name').length < 3) {
            errorMessage += 'Name must be at least 3 characters long.<br>';
        }

        // Check if email is in the correct format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.get('email'))) {
            errorMessage += 'Please enter a valid email address.<br>';
        }

        // Check if age is a positive number and not more than 120
        if (formData.get('age') <= 0 || isNaN(formData.get('age')) || formData.get('age') > 120) {
            errorMessage += 'Please enter a valid age between 1 and 120.<br>';
        }

        // Check if phone number is exactly 10 digits long and numeric
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(formData.get('phone'))) {
            errorMessage += 'Please enter a valid 10-digit phone number.<br>';
        }

        // Check if a career field is selected
        if (formData.get('career') === '') {
            errorMessage += 'Please select a career field of interest.<br>';
        }

        // If there are any errors, prevent form submission and show errors
        if (errorMessage) {
            document.getElementById('errorMessage').innerHTML = errorMessage;
        } else {
            // Submit the form data to the server
            fetch('/signup', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = '/dashboard'; // Redirect to dashboard on success
                } else {
                    return response.text().then(text => {
                        throw new Error(text);
                    });
                }
            })
            .catch(error => {
                document.getElementById('errorMessage').innerHTML = 'An error occurred while registering: ' + error.message;
            });
        }
    };
};
