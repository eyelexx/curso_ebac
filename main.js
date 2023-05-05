const form = document.querySelector('form')

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    const campoA = document.querySelector('#a');
    const campoB = document.querySelector('#b');
    const mensagemDeSaida = document.querySelector('.mensagemDeSaida');
    let comparador = campoA.value > campoB.value;
        
    if(comparador) { // Comparador deve ser 'true' para que a sentença seja executada.
        mensagemDeSaida.classList.remove('mensagemErro');
        mensagemDeSaida.classList.add('mensagemConfirmacao');
        mensagemDeSaida.innerHTML = `<h1 class="mensagemConfirmacao">Sucesso! A é <b>maior</b> que B.</h1>`;
        campoA.value = '';
        campoB.value = '';
    } else {
        mensagemDeSaida.classList.remove('mensagemConfirmacao');
        mensagemDeSaida.classList.add('mensagemErro');
        mensagemDeSaida.innerHTML = `<h1 class="mensagemErro">Erro! A é <b>menor</b> que B.</h1>`;
        campoA.value = '';
        campoB.value = '';
    };

    return comparador; // Retorna true ou false
});
