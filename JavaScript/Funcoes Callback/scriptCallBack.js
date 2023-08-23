function exibirArtigo(id, callbackSucesso, callbackErro) {
    
    if(true){
        callbackSucesso("Deu certo", "Deu bom viu", "Da hora isso aqui");
    }else {
        callbackErro("Erro ao recuperar os dados do BD");
    }

}

var callbackSucesso = function(titulo, descricao) {
    document.writeln("<h1>" + titulo + "</h1>");
    document.writeln("<hr/>");
    document.writeln("<p>" + descricao + "</p>");
    
}

var callbackErro = function(erro) {
    document.writeln("Erro numero: " + erro)
}

exibirArtigo(1, callbackSucesso, callbackErro);