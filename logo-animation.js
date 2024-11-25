// Add this script at the end of your body tag
document.addEventListener('DOMContentLoaded', function() {
    const schoolLogo = document.querySelector('.schoolLogo');
    let bounceTimeout;

    schoolLogo.addEventListener('mouseover', function() {
        // Add bouncing class
        this.style.animation = 'none'; // Reset animation
        setTimeout(() => {
            this.style.animation = 'bounce 0.8s ease infinite';
        }, 10);
    });

    schoolLogo.addEventListener('mouseout', function() {
        // Remove bouncing after a short delay
        clearTimeout(bounceTimeout);
        bounceTimeout = setTimeout(() => {
            this.style.animation = 'none';
            // Add a subtle return animation
            this.style.transform = 'translateY(0)';
            this.style.transition = 'transform 0.3s ease';
        }, 800);
    });

    // Add click animation
    schoolLogo.addEventListener('click', function() {
        this.style.animation = 'none';
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});