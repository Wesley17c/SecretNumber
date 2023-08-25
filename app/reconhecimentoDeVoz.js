const elementoChute = document.getElementById('chute');
const ativarMic = document.getElementById('botaoDeFala');
const historico = document.getElementById('historico');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
        recognition.lang = 'pt-br';


    let ouvindo = false;    

    ativarMic.addEventListener('click', () => {
        if (!ouvindo) {
            recognition.start();
            ouvindo = true;
            ativarMic.textContent = 'Ouvindo...';
    
            setTimeout(() => {
                recognition.stop();
                ouvindo = false;
                ativarMic.textContent = 'Clique para ativar o microfone';
            }, 3500); 
        }
    });
                
     recognition.addEventListener('result', onSpeak);


function onSpeak(e){
   
    const chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
    adicionaAoHistorico(chute);

}


function exibeChuteNaTela(chute){
    
    elementoChute.innerHTML = `
        <div> você disse: </div>
        <span class="box"> ${chute}</span>
    `
}


recognition.addEventListener('end', ()=> {
    
        if(ouvindo){
            recognition.start();
        }
            
});

function adicionaAoHistorico(numero) {
    const novoItem = document.createElement('div');
    novoItem.textContent = `Número registrado: ${numero}`;
    historico.appendChild(novoItem);
}
