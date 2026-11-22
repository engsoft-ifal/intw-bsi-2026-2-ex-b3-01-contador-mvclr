// Faça o contador funcionar. Edite só este arquivo.
//
// TODO 1: mostre 0 no #total ao carregar a página.
// TODO 2: ao clicar em #somar, aumente 1 e atualize o #total.
// TODO 3: ao clicar em #zerar, volte para 0 e atualize o #total.
//
// Dica: document.querySelector("#total"), addEventListener("click", ...),
//       elemento.textContent = valor.

// escreva seu código aqui
const total = document.querySelector('#total');
const soma = document.querySelector('#somar');
const zerar = document.querySelector('#zerar');

let contador = 0;

total.textContent = contador;

soma.addEventListener("click", ()=>{
    contador =+ 1
    total.textContent = contador
})

zerar.addEventListener("click", ()=>{
    contador = 0
    total.textContent = contador
})
