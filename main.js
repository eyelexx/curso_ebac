$(document).ready(function() {
    const novaTarefa = $('<li></li>');
    
    $('form').on('submit', function(evento) {
        evento.preventDefault();

        const inputTarefa = $('.tarefa').val();

        $(`${inputTarefa}`).appendTo(novaTarefa); // Insere o valor digitado no inputo dentro dos <li> da variável NovaTarefa
        
        $(`<li>
            ${inputTarefa}
        </li>`).appendTo('ul');
        
        $('.tarefa').val(''); // Reseta o input de tarefa
    })

    $('ul').on('click', 'li', function() { // Mudança de Tarefa Concluída/Não Concluída
        $(this).toggleClass('concluido');
    });

    $('.limpar').on('click', () => { // Limpa a lista
        console.log('ok');
        $('ul').html('')
    })

})