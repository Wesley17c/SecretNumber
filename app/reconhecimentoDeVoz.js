const elementoChute = document.getElementById('chute');
const ativarMic = document.getElementById('botaoDeFala');


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
            }, 5000); 
        }
    });
                
     recognition.addEventListener('result', onSpeak);


function onSpeak(e){
   
    const chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);

}


function exibeChuteNaTela(chute){
    
    elementoChute.innerHTML = `
        <div> você disse: </div>
        <span class="box"> ${chute}</span>
    `
}

// ativando o btn de ativação do mic
recognition.addEventListener('end', ()=> {
    
        if(ouvindo){
            recognition.start();
        }
            
});