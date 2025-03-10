function openEnvelope() {
    const flap = document.querySelector('.flap');
    const message = document.getElementById('message');
    
    // Rotate the flap open
    flap.style.transform = 'rotateX(-180deg)';
    
    // Scale up the message to reveal it
    message.style.transform = 'translate(-50%, -50%) scale(1)';
}
