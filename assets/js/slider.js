// Adicionando funcionalidade de rolagem horizontal com JavaScript
const carrousel = document.getElementById('carrousel');
let isDown = false;
let startX;
let scrollLeft;

carrousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carrousel.offsetLeft;
    scrollLeft = carrousel.scrollLeft;
});
carrousel.addEventListener('mouseleave', () => {
    isDown = false;
});
carrousel.addEventListener('mouseup', () => {
    isDown = false;
});
carrousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carrousel.offsetLeft;
    const walk = (x - startX) * 3; // Multiplicador adicionado para tornar a rolagem mais rápida
    carrousel.scrollLeft = scrollLeft - walk;
});