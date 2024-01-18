// Select all buttons and add event listeners for mouseover, mouseout, mousedown, and mouseup events
var buttons = document.querySelectorAll('.button01, .button, .buy-now-button, .buy-now-button02');
buttons.forEach(function(button) {
    button.addEventListener('mouseover', function() {
        this.classList.add('hover'); // Add 'hover' class on mouseover
    });

    button.addEventListener('mouseout', function() {
        this.classList.remove('hover'); // Remove 'hover' class on mouseout
    });

    button.addEventListener('mousedown', function() {
        this.classList.add('active'); // Add 'active' class on mousedown
    });

    button.addEventListener('mouseup', function() {
        this.classList.remove('active'); // Remove 'active' class on mouseup
    });
});

// Select all navigation links and add event listeners for mouseover and mouseout events
var navLinks = document.querySelectorAll('#nav a');
navLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.classList.add('hover'); // Add 'hover' class on mouseover
    });

    link.addEventListener('mouseout', function() {
        this.classList.remove('hover'); // Remove 'hover' class on mouseout
    });
});

// Select all images and add event listeners for mouseover and mouseout events
var images = document.querySelectorAll('.image img');
images.forEach(function(image) {
    image.addEventListener('mouseover', function() {
        this.classList.add('hover'); // Add 'hover' class on mouseover
    });

    image.addEventListener('mouseout', function() {
        this.classList.remove('hover'); // Remove 'hover' class on mouseout
    });
});

// Select all buttons and add event listeners for mouseover and mouseout events
var buttons = document.querySelectorAll('.button, .buy-now-button, .buy-now-button02');
buttons.forEach(function(button) {
    button.addEventListener('mouseover', function() {
        this.classList.add('hover'); // Add 'hover' class on mouseover
    });

    button.addEventListener('mouseout', function() {
        this.classList.remove('hover'); // Remove 'hover' class on mouseout
    });
});

// Function to toggle the display of the dropdown menu
function toggleMenu() {
    var nav = document.getElementById('dropdown-menu');
    if (nav.style.display === 'none') {
        nav.style.display = 'block'; // Display the dropdown menu if it was hidden
    } else {
        nav.style.display = 'none'; // Hide the dropdown menu if it was displayed
    }
}