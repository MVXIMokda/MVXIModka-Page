document.addEventListener('DOMContentLoaded', () => {
    // Glassmorphism hover effect tracking mouse
    const glassPanels = document.querySelectorAll('.glass-panel');

    glassPanels.forEach(panel => {
        panel.addEventListener('mousemove', (e) => {
            const rect = panel.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            panel.style.setProperty('--mouse-x', `${x}px`);
            panel.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Terminal typing effect logic (optional enhancement)
    const terminalBody = document.getElementById('typing-text');
    if (terminalBody) {
        const lines = terminalBody.innerHTML.split('<br>');
        terminalBody.innerHTML = '';
        
        // Simulating the console bootup
        let currentLine = 0;
        
        function showNextLine() {
            if (currentLine < lines.length) {
                // If it's a prompt line with cursor, we add it directly
                // If it's empty we skip
                if (lines[currentLine].trim() === '') {
                    currentLine++;
                    showNextLine();
                    return;
                }
                
                const lineDiv = document.createElement('div');
                lineDiv.innerHTML = lines[currentLine];
                lineDiv.style.opacity = '0';
                lineDiv.style.transform = 'translateY(10px)';
                lineDiv.style.transition = 'all 0.3s ease';
                
                terminalBody.appendChild(lineDiv);
                
                setTimeout(() => {
                    lineDiv.style.opacity = '1';
                    lineDiv.style.transform = 'translateY(0)';
                }, 50);

                currentLine++;
                
                // Random delay between 200ms and 600ms for realistic terminal output
                const delay = Math.random() * 400 + 200;
                setTimeout(showNextLine, delay);
            }
        }
        
        // Start typing after a short delay
        setTimeout(showNextLine, 1000);
    }
});
