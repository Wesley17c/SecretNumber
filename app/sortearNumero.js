const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    // Gera um número aleatório entre 0 (inclusive) e 1 (exclusive),
    // multiplica pelo intervalo desejado e adiciona 1 para garantir que o resultado esteja dentro do intervalo
    return parseInt(Math.random() * maiorValor + 1);
    
}
console.log(numeroSecreto);// estou exibindo o numero secreto na tela para fim de testes

const elementoMenorValor = document.getElementById('menorValor');
    elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maiorValor');
    elementoMaiorValor.innerHTML = maiorValor;
