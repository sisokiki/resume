document.addEventListener('DOMContentLoaded', () => {
    // Single command execution flow
    const commandText = "./deploy_modern_service.sh && ./status_check.sh";
    const terminalCommand = document.getElementById('terminal-command');
    const logOutput = document.getElementById('log-output');
    const terminalImage = document.getElementById('terminal-image'); 
    
    // Initialize first cursor
    terminalCommand.innerHTML = '<span class="cursor"></span>';
    
    // Type Command
    let i = 0;
    function typeCommand() {
        if (i < commandText.length) {
            terminalCommand.innerHTML = commandText.substring(0, i + 1) + '<span class="cursor"></span>';
            i++;
            setTimeout(typeCommand, 60); // Slightly faster
        } else {
            setTimeout(showOutput, 600);
        }
    }

    // Show Logs & Image
    function showOutput() {
        terminalCommand.innerHTML = commandText;
        logOutput.classList.remove('hidden');
        terminalImage.classList.remove('hidden');
        setTimeout(() => {
            terminalImage.classList.add('visible');
        }, 50);
    }

    setTimeout(typeCommand, 1000);
});
// --- Scroll to Top Functionality ---
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
    // If you scroll down more than 300 pixels, show the button
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Smooth scroll to top when clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});