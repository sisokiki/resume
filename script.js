document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Terminal Animation Logic ---
    const commandText = "./deploy_modern_service.sh && ./status_check.sh";
    const terminalCommand = document.getElementById('terminal-command');
    const logOutput = document.getElementById('log-output');
    const terminalImage = document.getElementById('terminal-image'); 
    
    if (terminalCommand) {
        terminalCommand.innerHTML = '<span class="cursor"></span>';
        
        let i = 0;
        const typeCommand = () => {
            if (i < commandText.length) {
                terminalCommand.innerHTML = commandText.substring(0, i + 1) + '<span class="cursor"></span>';
                i++;
                setTimeout(typeCommand, 60); 
            } else {
                setTimeout(showOutput, 600);
            }
        };

        const showOutput = () => {
            terminalCommand.innerHTML = commandText;
            if (logOutput) logOutput.classList.remove('hidden');
            if (terminalImage) {
                terminalImage.classList.remove('hidden');
                setTimeout(() => {
                    terminalImage.classList.add('visible');
                }, 50);
            }
        };

        setTimeout(typeCommand, 1000);
    }

    // --- 2. Smooth Scroll Logic (Logo & Button) ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const logoLink = document.querySelector('.logo-text');

    const scrollToTop = (e) => {
        if (e) e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }

    if (logoLink) {
        logoLink.style.cursor = 'pointer';
        logoLink.addEventListener('click', scrollToTop);
    }

    // --- 3. Unified Mobile Menu Logic ---
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('menu-toggle');

    if (menuToggle) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.checked = false; // Auto-close on link click
            });
        });
    }
});