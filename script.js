document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-btn');
    const threshold = 100; // Distance in pixels within which the button will move

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const rect = loginButton.getBoundingClientRect();

        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;

        const distanceX = mouseX - buttonX;
        const distanceY = mouseY - buttonY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < threshold) {
            const moveX = (distanceX / distance) * 50;
            const moveY = (distanceY / distance) * 50;
            const newLeft = rect.left - moveX;
            const newTop = rect.top - moveY;

            loginButton.style.position = 'absolute';
            loginButton.style.left = `${newLeft}px`;
            loginButton.style.top = `${newTop}px`;
        }
    });
});
