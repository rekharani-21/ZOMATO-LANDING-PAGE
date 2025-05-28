// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input');

    // Add an event listener for input focus
    searchInput.addEventListener('focus', () => {
        searchInput.placeholder = "Type to search...";
    });

    // Add an event listener for input blur
    searchInput.addEventListener('blur', () => {
        searchInput.placeholder = "Search for restaurant, cuisine, or a dish";
    });

    // Simple animation effect on logo when hovered
    const logo = document.querySelector('.logo img');
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'scale(1.1)';
        logo.style.transition = 'transform 0.3s';
    });

    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'scale(1)';
    });
});
