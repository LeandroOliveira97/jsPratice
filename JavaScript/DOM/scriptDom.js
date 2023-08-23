function atribuir() {

    var caracter = (document.getElementById('tf_entradaNome').value);
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