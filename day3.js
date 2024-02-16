var escolha = prompt('Qual área gostaria de seguir adiante? Escreva FrontEnd ou BackEnd');

alert(escolha == 'FrontEnd' ?
    'Seguindo esse caminho você aprenderá React ou Vue!' :
    'Seguir esse caminho você aprenderá C# ou Java!')

alert('Você evoluiu!Poderá se especializar na área escolhida ou seguir se desenvolvendo para se tornar Fullstack!');
var levelup = prompt('Escolha sua classe: Fullstack ou ContinuarArea');
alert(`Você escolheu ${levelup} para seguir!Parabéns e boa sorte!`);

var maistecnologia = 'sim';
var tecnologia = []

while(maistecnologia === 'sim'){
    tecnologia = prompt('Qual tecnologia você gostaria de se especializar ou conhecer?')
    maistecnologia = prompt('Tem mais alguma tecnologia que você gostaria de aprender? (Responda "sim" ou "não"');
}
alert('Ótima escolha! Boa jornada no aprendizado dessas tecnologias!');
