function repeticao(qtdeRepeticao) {

    //var i = qtdeRepeticao;

    /*
    while (i > 0) {
        document.getElementById('ta_outQtde').value += 'Ainda tem ' + i +' vezes!';
        i--;
    }
    */


    /*
    do {
        document.getElementById('ta_outQtde').value += 'Ainda tem ' + i +' vezes!';
        i--;
    } while (i > 0);
    */

    for (var i = qtdeRepeticao ; i > 0; i--) {
        document.getElementById('ta_outQtde').value += 'Ainda tem ' + i +' vezes!';
        
    }

    
    
}