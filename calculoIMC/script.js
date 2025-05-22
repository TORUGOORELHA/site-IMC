function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const valorImcTd = document.getElementById('valor-imc');
    const classificacaoImcTd = document.getElementById('classificacao-imc');

    
    classificacaoImcTd.className = '';

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        valorImcTd.textContent = "-";
        classificacaoImcTd.textContent = "Insira valores válidos";
        classificacaoImcTd.classList.add('obesidade-grau-i'); 
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";
    let classeCor = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        classeCor = 'abaixo-peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
        classeCor = 'peso-normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
        classeCor = 'sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade Grau I";
        classeCor = 'obesidade-grau-i';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade Grau II";
        classeCor = 'obesidade-grau-ii';
    } else {
        classificacao = "Obesidade Grau III";
        classeCor = 'obesidade-grau-iii';
    }

    valorImcTd.textContent = imc.toFixed(2);
    classificacaoImcTd.textContent = classificacao;
    classificacaoImcTd.classList.add(classeCor); 
}
