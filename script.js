document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Add an event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove 'active' class from all links
            navLinks.forEach(item => {
                item.classList.remove('active');
            });

            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // On page load, automatically set the navigation link corresponding to the current page as "active"
    const currentPath = window.location.pathname.split('/').pop(); // Gets the filename (e.g., "navbar.html")

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
        // Special handling for navbar.html if it's the default document (e.g., accessed as just "/")
        // This might require server configuration, but for local file access,
        // it assumes 'navbar.html' is opened directly.
        if (currentPath === "" && link.getAttribute('href') === "navbar.html") {
             link.classList.add('active');
        } else if (currentPath === "navbar.html" && link.getAttribute('href') === "navbar.html") {
            link.classList.add('active');
        }
    });
});
