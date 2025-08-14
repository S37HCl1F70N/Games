document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.getElementById('main-title');
    const titleText = 'SELECT A GAME';
    let i = 0;

    function typeWriter() {
        if (i < titleText.length) {
            titleElement.innerHTML += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Adjust typing speed here
        }
    }

    typeWriter();
});
