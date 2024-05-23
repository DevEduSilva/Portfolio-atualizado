const btnVerMais = document.getElementById('btnVerMais');
const textMoreIntroduction = document.getElementById('textMoreIntroduction');
const about = document.getElementById('about')

btnVerMais.addEventListener('click', () => {
    textMoreIntroduction.classList.toggle('show');
    about.classList.toggle('show');
    
    if (textMoreIntroduction.classList.contains('show')) {
        btnVerMais.textContent = 'VER MENOS...';
    } else {
        btnVerMais.textContent = 'VER MAIS...';
    }
});
