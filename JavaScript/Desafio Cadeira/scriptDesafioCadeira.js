var arrayObjetos = Array();


function atualizarTa(arrayObj) {
    document.getElementById('ta_listagem').value = arrayObj;
}


function inserirObjetoArray() {

    if (document.getElementById('in_objetos').value != '') {
        gi
        var objeto = document.getElementById('in_objetos').value;


        if (!arrayObjetos.includes(objeto)) {

            arrayObjetos.push(objeto);

            console.log(arrayObjetos);

            atualizarTa(arrayObjetos);

            document.getElementById('in_objetos').value = '';

        } else {
            alert('O objeto já foi inserido anteriormente!');
        }
    } else {
        alert('Valor inválido!');
    }




}

function ordenar() {

    console.log(arrayObjetos.sort());
    atualizarTa(arrayObjetos);

}