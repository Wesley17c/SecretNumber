function verificaSeOChutePossuiUmValorValido(chute){

    const numero = +chute;
    
    if(valorInvalido(numero)){
        elementoChute.innerHTML += `
       
       <div> valor inválido </div>

       `
        return
    }

    if(numeroMaiorOuMenorQueOValorPermitido(numero)){
       elementoChute.innerHTML += `
       
       <div> valor inválido: o número segredo precisa estar entre ${menorValor} e ${maiorValor} </div>

       `
       return
    }

    if(numero === numeroSecreto ){

        document.body.innerHTML =  `
         <h2> você acertou!!!</h2>
         <h3> o número secreto é </h2>
         <span class="box"> ${numeroSecreto}</span> 
         <button id="jogar-novamente" class="btn-jogar"> Recomeçar partida </button>
        
        `

    } else if( numero > numeroSecreto){
        elementoChute.innerHTML =
        `
        <div> você disse: </div> 
        <span class="box"> ${chute}</span> 
        <div> O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i> </div>
        `

    } else {
        elementoChute.innerHTML =
        `
        <div> você disse:</div>  
        <span class="box"> ${chute}</span> 
        <div> O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i> </div>`

    }

}

function valorInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOValorPermitido(numero){

    return numero > maiorValor || numero < menorValor;

}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
});