
function contagemNotas() {
    const sacarInput = document.getElementById("sacar")
    let valorSaque = parseInt(sacarInput.value)

    if (valorSaque < 10 || valorSaque > 600 || isNaN(valorSaque)) {
        alert('O valor de saque deve ser entre R$ 10 e R$ 600.')
        return
    }

    let notasDe100 = Math.floor(valorSaque / 100);
    valorSaque = valorSaque % 100;
    let notasDe50 = Math.floor(valorSaque / 50);
    valorSaque = valorSaque % 50;
    let notasDe20 = Math.floor(valorSaque / 20);
    valorSaque = valorSaque % 20;
    let notasDe10 = Math.floor(valorSaque / 10);
    valorSaque = valorSaque % 10;
    let notasDe5 = Math.floor(valorSaque / 5);
    valorSaque = valorSaque % 5;
    let notasDe2 = Math.floor(valorSaque / 2);
    valorSaque = valorSaque % 2;
    let notasDe1 = valorSaque;

    const p = document.getElementById("notas")

    let texto = '';

    if (notasDe100 > 0) texto += `${notasDe100} nota(s) de R$100\n`;
    if (notasDe50 > 0) texto += `${notasDe50} nota(s) de R$50\n`;
    if (notasDe20 > 0) texto += `${notasDe20} nota(s) de R$20\n`;
    if (notasDe10 > 0) texto += `${notasDe10} nota(s) de R$10\n`;
    if (notasDe5 > 0) texto += `${notasDe5} nota(s) de R$5\n`;
    if (notasDe2 > 0) texto += `${notasDe2} nota(s) de R$2\n`;
    if (notasDe1 > 0) texto += `${notasDe1} nota(s) de R$1\n`;

    p.innerText = texto.trim();
}

function validarNumero(event) {
    const input = event.target
    const regex = /^\d*$/;
    if (!regex.test(input.value)) {
        alert('Por favor, insira um número inteiro.');
        input.value = input.value.replace(/[^0-9]/g, '');
    }
}

document.getElementById("botao").addEventListener("click", contagemNotas)
document.getElementById("sacar").addEventListener("input", validarNumero)