const elementoChute = document.getElementById('chute');

// Verifica se o navegador suporta a API de Reconhecimento de Fala
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Cria uma instância da classe SpeechRecognition
const recognition = new SpeechRecognition();

// Define o idioma do reconhecimento como 'pt-br'
recognition.lang = 'pt-br';

// Inicia o processo de reconhecimento de fala
recognition.start();

// Adiciona um ouvinte para o evento 'result', que é acionado quando há resultados do reconhecimento
recognition.addEventListener('result', onSpeak);

// Função chamada quando há resultados de fala capturados
function onSpeak(e){
    // Obtém o texto transcrito da fala a partir dos resultados
    const chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);

    
}

// Função para exibir o texto transcrito na tela
function exibeChuteNaTela(chute){
    // Atualiza o conteúdo do elemento 'elementoChute' com o HTML gerado
    elementoChute.innerHTML = `
        <div> você disse: </div>
        <span class="box"> ${chute}</span>
    `
}

recognition.addEventListener('end', ()=> recognition.start());