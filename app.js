let listaNumeroSorteados = [];
let numeroMaximo = 50;
let numeroSecreto = geraNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}
function mensagemTela(){
    exibirTextoNaTela('h1', 'Jogo Do Número Secreto.');
    exibirTextoNaTela('p', `Escolha Um Número entre 1 a ${numeroMaximo}`);
}

mensagemTela();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativa > 1? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o numero secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativa++;
        limpaCampo();
    }
}

function geraNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeNumeroSorteado = listaNumeroSorteados.length;

    if (quantidadeNumeroSorteado == numeroMaximo){
        listaNumeroSorteados = [];
    }
    if (listaNumeroSorteados.includes(numeroSorteado)){
        return geraNumeroAleatorio();
    } else{
        listaNumeroSorteados.push(numeroSorteado);
        return numeroSorteado;
    }

}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciaJogo(){
    mensagemTela();
    numeroSecreto = geraNumeroAleatorio();
    limpaCampo();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);

}