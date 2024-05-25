window.addEventListener('DOMContentLoaded', function() {
    // Função para verificar a posição de rolagem da página
    function verificarPosicaoRolagem() {
        var setaElement = document.querySelector('.seta');
        // Verifica se o elemento .seta existe e se a posição de rolagem é maior que 0
        if (setaElement && window.scrollY === 0) {
            setaElement.style.display = 'none'; // Oculta a seta se estiver no topo da página
        } else {
            setaElement.style.display = 'block'; // Mostra a seta se não estiver no topo da página
        }
    }

    // Função para rolar de volta para o topo da página quando a seta é clicada
    function voltarParaInicio() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Para rolar suavemente
        });
    }

    // Adiciona um event listener para o evento de clique na seta
    document.querySelector('.seta').addEventListener('click', voltarParaInicio);

    // Verifica a posição de rolagem quando a página é carregada
    verificarPosicaoRolagem();

    // Verifica a posição de rolagem quando a página é rolada
    window.addEventListener('scroll', verificarPosicaoRolagem);
});