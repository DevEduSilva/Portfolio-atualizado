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

// Adicionando funcionalidade aos botões .btnNext e .btnPrevious
const btnNext = document.querySelector('.btnNext');
const btnPrevious = document.querySelector('.btnPrevious');

btnNext.addEventListener('click', () => {
    carrousel.scrollBy({ left: 150, behavior: 'smooth' });
    updateButtons();
});

btnPrevious.addEventListener('click', () => {
    carrousel.scrollBy({ left: -150, behavior: 'smooth' });
    updateButtons();
});

carrousel.addEventListener('scroll', updateButtons);

function updateButtons() {
    const maxScrollLeft = carrousel.scrollWidth - carrousel.clientWidth;
    btnPrevious.style.display = carrousel.scrollLeft > 0 ? 'block' : 'none';
    btnNext.style.display = carrousel.scrollLeft < maxScrollLeft ? 'block' : 'none';
}

// Inicialização dos botões na carga da página
updateButtons();