const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    
    return parseInt(Math.random() * maiorValor + 1);
    
}
console.log(`o numero secreto é ${numeroSecreto}`);// estou exibindo o numero secreto no console para fim de testes

const elementoMenorValor = document.getElementById('menorValor');
    elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maiorValor');
    elementoMaiorValor.innerHTML = maiorValor;

