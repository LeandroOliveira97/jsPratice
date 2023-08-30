var produtos = Array();

produtos[0] = 'Beterraba'
produtos[1] = 'Maracuja'
produtos[2] = 'Maionese'
produtos[3] = 'Pastel'
produtos[4] = 'Cenoura'
produtos[5] = 'Acerola'
produtos[6] = 'Zebra'

var lista_compras = Array();

/*
lista_compras[0] = produtos[4];
lista_compras[1] = produtos[3];
lista_compras[2] = produtos[2];
lista_compras[3] = produtos[1];
lista_compras[4] = produtos[0];
*/
function adicionar() {

    var produto = document.getElementById('in_produto').value;

    if (produtos.includes(produto)) {
        lista_compras.push(produto);
    } else {
        alert("Produto inválido! Digite um produto que esteja listado!");
    }

    document.getElementById('ta_listaCompras').value = lista_compras + '.';
    document.getElementById('in_produto').value = '';
}

function remover() {
    var produto = document.getElementById('in_produto').value;

    lista_compras.pop();

    document.getElementById('ta_listaCompras').value = lista_compras + '.';
    document.getElementById('in_produto').value = '';
}


/*

var arrayDeArray = Array();

arrayDeArray['Produtos'] = Array(produtos);

arrayDeArray['ListaCompras'] = Array(lista_compras);

*/

document.getElementById('ta_listaProdutos').value = produtos.sort() + '.';



/*
document.writeln('<hr>Lista de Produtos: <br>')
for (let index = 0; index < produtos.length; index++) {
    document.writeln('Produto '+ index +' = '+produtos[index] + '<br>');
    
}

document.writeln('<hr>Lista de compras: <br>')
for (let index = 0; index < lista_compras.length; index++) {
    document.writeln('listaCompras '+ index +'  = ' + lista_compras[index]+ '<br>');
    
}

*/

