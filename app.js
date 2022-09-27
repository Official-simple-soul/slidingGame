const slideCard = document.querySelectorAll('.slide-card')


slideCard.forEach(slides => {
    slides.addEventListener('click', function() {
        // slideCard.style.backgroundColor = 'black'
        slides.style.background = 'radial-gradient(rgba(255, 255, 255, 0.366), rgba(0, 128, 0, 0.244))';
    })
})
