let frutas = [];
let congelados = [];
let laticinios = [];
let besteiras = [];
let mistura = [];
let legumes = [];
let vegetais = [];

while (true) {
    var resposta = prompt('Gostaria de adicionar algo na lista? Responda (sim) ou (nao) ou (remover)');

    if (resposta === 'nao')
        break;
    else if (resposta === 'sim') {
        var comida = prompt('Qual comida você deseja inserir?')
        var categoria = prompt('Em qual categoria essa comida se encaixa?')

        switch (categoria) {
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
    else if (resposta === 'remover') {
        if (frutas.length + congelados.length + laticinios.length + besteiras.length + mistura.length + legumes.length + vegetais.length === 0) {
            alert('Não há itens na lista para remover.')
            continue;
        }

        alert('Lista de compras:')
        if (frutas.length > 0)
            alert('Frutas: ' + frutas.join(', '))
        if (congelados.length > 0)
            alert('Congelados: ' + congelados.join(', '))
        if (laticinios.length > 0)
            alert('Laticinios: ' + laticinios.join(', '))
        if (besteiras.length > 0)
            alert('Besteiras: ' + besteiras.join(', '))
        if (mistura.length > 0)
            alert('Mistura: ' + mistura.join(', '))
        if (legumes.length > 0)
            alert('Legumes: ' + legumes.join(', '))
        if (vegetais.length > 0)
            alert('Vegetais: ' + vegetais.join(', '))

        var itemParaRemover = prompt('Qual item você deseja remover?')
        var removido = false

        function removerItem(array){
            const index = array.indexOf(itemParaRemover)
            if(index !== -1){
                array.splice(index, 1);
                removido = true;
            }
        }

        removerItem(frutas);
        removerItem(congelados);
        removerItem(laticinios);
        removerItem(besteiras);
        removerItem(mistura);
        removerItem(legumes);
        removerItem(vegetais);

        if(removido)
            alert('Item removido com sucesso!')
        else
            alert('Não foi possível encontrar o item na lista.');
    }
}

alert('Lista final de compras:\n' +
    'Frutas: ' + frutas.join(', ') + '\n' +
    'Congelados: ' + congelados.join(', ') + '\n' +
    'Laticinios: ' + laticinios.join(', ') + '\n' +
    'Besteiras: ' + besteiras.join(', ') + '\n' +
    'Mistura: ' + mistura.join(', ') + '\n' +
    'Legumes: ' + legumes.join(', '));

