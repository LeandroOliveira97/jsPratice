var nome;
var nota1 = 0;
var nota2 = 0;
var media = 0;
temp = 0;

nome = prompt("Digite o nome do aluno: ");
nota1 = Number(prompt("Digite a primeira nota: "));
nota2 = Number(prompt("Digite a segunda nota: "));


temp = parseFloat(nota1) + parseFloat(nota2);

media = temp/2;

if(media >= 7) {
    document.write(nome + " Aprovado! Media: " + media);
}else {
    document.write(nome + " Reprovado! Media: "+ media);
}