document.addEventListener('DOMContentLoaded', function () {
    // Get references to the theme toggle button, body element, and logo element
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const logo = document.querySelector('.logo');

    // Function to update the theme
    function updateTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-theme');
            themeToggle.textContent = 'Theme: dark'; // Set the text to "Theme: dark"
            logo.src = '/static/encyclopedia/logo-dark.webp'; // Switch to the dark mode logo
            logo.alt = 'Encyclopedia dark mode'; // Update the logo's alt text
        } else {
            body.classList.remove('dark-theme');
            themeToggle.textContent = 'Theme: light'; // Set the text to "Theme: light"
            logo.src = '/static/encyclopedia/logo-light.webp'; // Switch to the light mode logo
            logo.alt = 'Encyclopedia light mode'; // Update the logo's alt text
        };
    };

    // Check and apply the saved theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    const isDarkTheme = savedTheme === 'dark';
    updateTheme(isDarkTheme);

    // Add a click event listener to toggle between dark and light themes
    themeToggle.addEventListener('click', function () {
        const isDark = !body.classList.contains('dark-theme');
        updateTheme(isDark);

        // Save the current theme preference to localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});