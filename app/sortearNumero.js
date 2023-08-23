// Define o menor e o maior valor possíveis para o número a ser adivinhado
const menorValor = 1;
const maiorValor = 1000;

// Chama a função para gerar um número aleatório e armazena o resultado na variável 'numeroSecreto'
const numeroSecreto = gerarNumeroAleatorio();

// Função para gerar um número aleatório dentro do intervalo definido
function gerarNumeroAleatorio(){
    // Gera um número aleatório entre 0 (inclusive) e 1 (exclusive),
    // multiplica pelo intervalo desejado e adiciona 1 para garantir que o resultado esteja dentro do intervalo
    return parseInt(Math.random() * maiorValor + 1);
}

// Seleciona o elemento HTML com o id 'menorValor'
const elementoMenorValor = document.getElementById('menorValor');
// Atualiza o conteúdo do elemento com o valor de 'menorValor'
elementoMenorValor.innerHTML = menorValor;

// Seleciona o elemento HTML com o id 'maiorValor'
const elementoMaiorValor = document.getElementById('maiorValor');
// Atualiza o conteúdo do elemento com o valor de 'maiorValor'
elementoMaiorValor.innerHTML = maiorValor;
