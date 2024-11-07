// Select all session titles
const sessionTitles = document.querySelectorAll('.session-title');

// Loop through each session title
sessionTitles.forEach(title => {
    title.addEventListener('click', function () {
        const sessionInfo = this.nextElementSibling; // Get the next div (session-info)
        
        // Toggle visibility of session info
        sessionInfo.classList.toggle('d-none');
    });
});

// Select all "Done" buttons
const doneButtons = document.querySelectorAll('.done-btn');

// Add event listeners for the "Done" buttons
doneButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Mark the session as completed
        this.closest('.list-group-item').querySelector('.session-info').classList.add('completed');
        this.classList.add('completed'); // Change button to "completed" style
        this.setAttribute('disabled', true); // Disable the button
    });
});
