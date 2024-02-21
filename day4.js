var numberandom = Math.floor(Math.random() * (10 - 0 + 1) + 0)

alert('Você tem 3 tentativas para adivinhar! Boa sorte :)')


for(var tentativas = 0; tentativas < 3; tentativas++){
    var resposta = prompt('Qual numero voce chuta?')
    var numeroChutado = parseInt(resposta)

    if(resposta != numberandom)
        alert('Que pena você errou! :(')

    if(resposta == numberandom){
        alert('Parabéns você acertou o numero!')
        break;
    }
}
if(numeroChutado !== numberandom)
    alert('Suas tentativas acabaram. O numero correta era ' + numberandom);