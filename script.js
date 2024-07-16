document.addEventListener('mousemove', (event) => {
    const star = document.createElement('div'); // Create a new star element
    star.className = 'star'; // Add the 'star' class for styling
    star.style.left = `${event.pageX}px`; // Position star horizontally based on mouse position
    star.style.top = `${event.pageY}px`; // Position star vertically based on mouse position
    document.body.appendChild(star); // Append star to the document body

    setTimeout(() => {
        star.remove(); // Remove star after animation completes
    }, 800); // Adjust the timeout to match animation duration (0.8s in this case)
});