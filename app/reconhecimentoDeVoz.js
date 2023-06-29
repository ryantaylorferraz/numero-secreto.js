const elementoChute = document.getElementById('chute')
var numbern = 4

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak (e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificarSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class = "box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

//próxima aula: criando botao jogar novamentee 