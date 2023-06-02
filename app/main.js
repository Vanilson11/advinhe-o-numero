const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = gerarNumeroSecreto();

const elementoMenorValor = document.querySelector('.menorValor');
const elementoMaiorValor = document.querySelector('.maiorValor');

const botao = document.querySelector('.botao');
const elementoContainer = document.querySelector('.container');
const elementoDicas = document.querySelector('.dicas')

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;


function gerarNumeroSecreto(){
    return parseInt(Math.random() * maiorValor + 1);
}

limpaInput();

function limpaInput(){
    const numForm = document.querySelector('#numForm');
    numForm.value = '';
}

botao.addEventListener("click", verificaValorValido);

function verificaValorValido(){
    const numForm = document.querySelector('#numForm');
    const valor = +numForm.value
    if(verificaNan(valor)){
        elementoDicas.innerHTML = `
            <div class="dica">
                <span>Valor Inválido!</span>
            </div>
        `
    } else if(valor < menorValor){
        elementoDicas.innerHTML = `
            <div class="dica">
                <span>Valor Inválido! O número secreto está entre <strong>${menorValor}</strong> e <strong>${maiorValor}</strong>.</span>
            </div>
        `
    } else if(valor > maiorValor){
        elementoDicas.innerHTML = `
            <div class="dica">
                <span>Valor Inválido! O número secreto está entre <strong>${menorValor}</strong> e <strong>${maiorValor}</strong>.</span>
            </div>
        `
    } else{
        verificaValorIgulaNumeroSecreto(valor);
    }
    numForm.value = '';
    numForm.focus();
}

function verificaNan(valor){
    return Number.isNaN(valor)
}

function verificaValorIgulaNumeroSecreto(valor){
    if(valor == numeroSecreto){
        elementoContainer.innerHTML = `
            <div class="acerto">
                <i class="ph-bold ph-check-circle"></i>
                <h3>Parabéns! Você acertou.</h3>
                <span>O número secreto era <strong>${numeroSecreto}.</strong></span>
                <button class="jogarNovamente">Jogar novamente</button>
            </div>
        `
        jogarNovamente();
    } else if(valor > numeroSecreto){
        elementoDicas.innerHTML = `
            <div class="dica">
                <span>O número secreto é <i class="ph-fill ph-arrow-fat-down"></i></span>
            </div>
        `
    } else if(valor < numeroSecreto){
        elementoDicas.innerHTML = `
            <div class="dica">
                <span>O número secreto é <i class="ph-fill ph-arrow-fat-up"></i></span>
            </div>
        `
    }
    const numForm = document.querySelector('#numForm');
    numForm.value = '';
    numForm.focus();
}

function jogarNovamente(){
    const elementoJogarNovamente = document.querySelector('.jogarNovamente');
    elementoJogarNovamente.addEventListener("click", () => {
        window.location.reload();
    })
}