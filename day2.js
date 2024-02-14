//para se fazer uma pergunta com caixa de resposta usamos prompt
var nome = prompt('Qual o seu nome?');
var idade = prompt('Quanto anos você tem?');
var linguagem = prompt('Qual linguagem de programação você está estudando?');

//alert exibe uma caixa de mensagem na tela
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

var gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if(gosta == 1){
    alert('Muito bom! Continue estudando e você terá muito sucesso');
} else {
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}