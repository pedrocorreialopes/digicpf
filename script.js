function calcularCPF() {
    const cpf = document.getElementById('cpf').value;
    if (cpf.length !== 9) {
        document.getElementById('resultado-cpf').innerText = "Digite exatamente 9 números.";
        return;
    }

    let digitos = cpf.split('').map(Number);
    let primeiroDigito = calcularDigitoVerificadorCPF(digitos, 10);
    digitos.push(primeiroDigito);
    let segundoDigito = calcularDigitoVerificadorCPF(digitos, 11);

    document.getElementById('resultado-cpf').innerText = `Dígitos verificadores: ${primeiroDigito}${segundoDigito}`;
}

function calcularCNPJ() {
    const cnpj = document.getElementById('cnpj').value;
    if (cnpj.length !== 12) {
        document.getElementById('resultado-cnpj').innerText = "Digite exatamente 12 números.";
        return;
    }

    let digitos = cnpj.split('').map(Number);
    let primeiroDigito = calcularDigitoVerificadorCNPJ(digitos, 5);
    digitos.push(primeiroDigito);
    let segundoDigito = calcularDigitoVerificadorCNPJ(digitos, 6);

    document.getElementById('resultado-cnpj').innerText = `Dígitos verificadores: ${primeiroDigito}${segundoDigito}`;
}

function calcularDigitoVerificadorCPF(digitos, pesoInicial) {
    let soma = digitos.reduce((acc, val, index) => acc + val * (pesoInicial - index), 0);
    let resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
}

function calcularDigitoVerificadorCNPJ(digitos, pesoInicial) {
    const pesos = [pesoInicial, pesoInicial - 1, pesoInicial - 2, pesoInicial - 3, pesoInicial - 4, pesoInicial - 5, pesoInicial - 6, pesoInicial - 7, pesoInicial - 8, pesoInicial - 9, pesoInicial - 10, pesoInicial - 11];
    let soma = digitos.reduce((acc, val, index) => acc + val * pesos[index], 0);
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}
