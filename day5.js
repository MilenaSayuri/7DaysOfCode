let frutas = [];
let congelados = [];
let laticinios = [];
let besteiras = [];
let mistura = [];
let legumes = [];
let vegetais = [];

while(true){
    var resposta = prompt('Gostaria de adicionar algo na lista? Responda (sim) ou (nao) ');

    if(resposta !== 'sim')
        break;

    var comida = prompt('Qual comida você deseja inserir?')
    var categoria = prompt('Em qual categoria essa comida se encaixa?')

    switch(categoria){
        case 'frutas':
            frutas.push(comida);
            break;
        case 'congelados':
            congelados.push(comida);
            break;
        case 'laticinios':
            laticinios.push(comida);
            break;
        case 'besteiras':
            besteiras.push(comida)
            break;
        case 'mistura':
            mistura.push(comida)
            break;
        case 'legumes':
            legumes.push(comida)
            break;
        case 'vegetais':
            vegetais.push(comida)
            break;
        
    }
}

alert('Lista de compras:')
if(frutas.length > 0)
    alert('Frutas: ' + frutas.join(', '))
if(congelados.length > 0)
    alert('Congelados: ' + congelados.join(', '))
if(laticinios.length > 0)
    alert('Laticinios: ' + laticinios.join(', '))
if(besteiras.length > 0)
    alert('Besteiras: ' + besteiras.join(', '))
if(mistura.length > 0)
    alert('Mistura: ' + mistura.join(', '))
if(legumes.length > 0)
    alert('Legumes: ' + legumes.join(', '))
if(vegetais.length > 0)
    alert('Vegetais: ' + vegetais.join(', '))
