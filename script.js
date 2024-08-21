function somar(numero1, numero2) {
    return numero1 + numero2;
}
function gerarResultado() {
    // Captura os valores dos inputs
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    
    // Chama a função de soma
    const resultado = somar(numero1, numero2);
    
    // Exibe o resultado em um alert
    alert("O resultado da soma é: " + resultado);
}
