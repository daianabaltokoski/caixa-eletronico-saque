
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
    p.innerText = `Notas de R$ 100: ${notasDe100}\n
    Notas de R$ 50: ${notasDe50}\n
    Notas de R$ 20: ${notasDe20}\n
    Notas de R$ 10: ${notasDe10}\n
    Notas de R$ 5: ${notasDe5}\n
    Notas de R$ 2: ${notasDe2}\n
    Notas de R$ 1: ${notasDe1}`
}

function validarNumero(event) {
    const input = event.target
    const regex = /^\d*$/;
    if (!regex.test(input.value)) {
        alert('Por favor, insira um número inteiro.');
        input.value = input.value.replace(/[^0-9]/g, '');
    } }

document.getElementById("botao").addEventListener("click", contagemNotas)
document.getElementById("sacar").addEventListener("input", validarNumero)

// document.getElementById("sacar").addEventListener("blur", (e) => {
//     const v = parseInt(e.target.value)
//     if (v < 10 || isNaN(v)) {
//         e.target.value = '10'
//     }

//     if (v > 600) {
//         e.target.value = '600'
//     }

// })