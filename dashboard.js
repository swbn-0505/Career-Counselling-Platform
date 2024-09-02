window.onload = function() {
    var userId = localStorage.getItem('userId');

    document.getElementById('profileUpdateForm').onsubmit = function(event) {
        event.preventDefault(); // Prevent default form submission

        var formData = new FormData(document.getElementById('profileUpdateForm'));
        formData.append('userId', userId);

        fetch('/updateProfile', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Show profile update success message
            document.getElementById('updateMessage').innerHTML = 'Profile updated successfully!';
            setTimeout(() => {
                document.getElementById('updateMessage').innerHTML = ''; // Clear message after 3 seconds
            }, 3000);
        })
        .catch(error => {
            document.getElementById('updateMessage').innerHTML = 'An error occurred while updating profile.';
        });
    };
};
