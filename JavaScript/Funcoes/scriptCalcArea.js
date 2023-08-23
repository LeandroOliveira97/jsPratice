function calcularArea(larg, compri) {

    var result = 0;

    result = larg * compri;

    return result;
}

var comprimento = 0, largura = 0;

comprimento = parseFloat(prompt("Digite o valor do comprimento:"));
largura = parseFloat(prompt("Digite o valor da largura:"));

document.write(calcularArea(largura, comprimento));