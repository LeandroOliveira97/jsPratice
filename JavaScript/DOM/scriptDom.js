/*function atribuir() {

    var caracter = (document.getElementById('tf_entradaNome').value);

    caracter.trim();
    document.getElementById('tf_entradaNome').value = '';
    switch (caracter) {
        case '0':
        case '1':    
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':

        document.getElementById('tf_outNro').value += caracter;
            break;
    
        default:
            document.getElementById('tf_outLetra').value += caracter;
            break;
    }


}


function modificaEstilo(corFundo) {
    document.getElementById('principal').style.background = corFundo;
}



function modificaClasse() {

    var classeMsg = document.getElementById('mensagem').className;

    if(classeMsg == 'estilo1') {
        document.getElementById('mensagem').className = 'estilo2';
    }else {
        document.getElementById('mensagem').className = 'estilo1'
    }
}
*/

function trocaFundo() {
    document.getElementById('inCaracter').style.backgroundColor = 'yellow'
}


function contaCaracter() {
    var qtdeCaracter = document.getElementById('inCaracter').value;

    if (qtdeCaracter.length < 3) {
        document.getElementById('inCaracter').style.backgroundColor = '#FF0000';

    } else {
        document.getElementById('inCaracter').style.backgroundColor = 'chartreuse';
    }

} 