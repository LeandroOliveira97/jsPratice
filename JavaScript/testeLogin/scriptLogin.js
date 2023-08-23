var usuario = "abc";
var senha = "123";

var tUsuario = null;
var tsenha = null;

tUsuario = prompt("Digite o usuario");
tsenha = prompt("Digite a senha");

//Alternativa (limitada) do if/else.  comparador ternario

var ternario = (usuario === tUsuario && senha === tsenha) ? "Logado com sucesso!" : "Não Logado!";

document.write(ternario);


/*
if(usuario === tUsuario && senha === tsenha){
    document.write("Logado com sucesso!");
}else {
    document.write("Não logado");
}
*/