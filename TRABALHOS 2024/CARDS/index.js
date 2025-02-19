// Seleciona todos os elementos com a classe 'box'
const boxes = document.querySelectorAll('.box');

// Adiciona o evento de clique para cada box
boxes.forEach(function(box) {
    // Ativa o zoom ao clicar
    box.addEventListener('click', function() {
        this.classList.toggle('zoom');
    });

    // Remove o zoom quando o mouse sai do box
    box.addEventListener('mouseout', function() {
        this.classList.remove('zoom');
    });
});