// Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade (ou seja, se pode se pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque.

function calcular() {

    let valor = Number(document.querySelector('#inValor').value)
    let exibir = document.querySelector('#outExibir')
    let mostrar100 = document.querySelector('#Mostrar100')
    let mostrar50 = document.querySelector('#Mostrar50')
    let mostrar10 = document.querySelector('#Mostrar10')
    let mostrar5 = document.querySelector('#Mostrar5')

    let resto100 = Math.floor(valor / 100)

    if (valor == '' || isNaN(valor)) {
        alert('Digite um valor válido por favor')
        let valor = document.querySelector('#inValor').value = ''
        inValor.focus()
        return;
    } 

    if (valor % 5 != 0) {

        alert('Digite outro valor, pois não temos notas suficientes')
        let valor = document.querySelector('#inValor').value = ''
        inValor.focus()
        return;

    }

    exibir.textContent = `Saque de R$ ${valor} realizado`

    if (resto100 >= 1) {
        mostrar100.textContent = `${resto100}`
    } 

    valor = valor - (resto100 * 100)
    let resto50 = Math.floor(valor / 50)

    if (resto50 >= 1) {
        mostrar50.textContent = `${resto50}`
    }

    valor = valor - (resto50 * 50)
    let resto10 = Math.floor(valor / 10)

    if (resto10 >= 1) {
        mostrar10.textContent = `${resto10}`
    }
    
    valor = valor - (resto10 * 10)
    let resto5 = Math.floor(valor / 5)

    if (resto5 >= 1) {
        mostrar5.textContent = `${resto5}`
    }

}

    var mostrar = document.querySelector('#btMostrar')
    mostrar.addEventListener('click', calcular)