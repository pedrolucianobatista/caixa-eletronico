// Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade (ou seja, se pode se pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque.

function calcular() {

    let valor = Number(document.querySelector('#inValor').value)
    let resultado = document.querySelector('#resposta')
    let mostrar100 = document.querySelector('#Mostrar100')
    let mostrar50 = document.querySelector('#Mostrar50')
    let mostrar10 = document.querySelector('#Mostrar10')

    let resto100 = Math.floor(valor / 100)

    if (valor == '' || isNaN(valor)) {
        alert('Digite um valor válido por favor')
        let valor = document.querySelector('#inValor').value = ''
        inValor.focus()
        return;
    }

    if (resto100 >= 1) {
        mostrar100.textContent = `Notas de 100R$: ${resto100}`
    } 

    valor = valor - (resto100 * 100)
    let resto50 = Math.floor(valor / 50)

    if (resto50 >= 1) {
        mostrar50.textContent = `Notas de 50R$: ${resto50}`
    }

    valor = valor - (resto50 * 50)
    let resto10 = Math.floor(valor / 10)

    if (resto10 >= 1) {
        mostrar10.textContent = `Notas de 10R$: ${resto10}`
    }
    
    valor = valor - (resto10 * 10)

    if (valor != 0) {
        resultado.innerHTML = `Infelizmente não possuímos notas suficientes`
        let mostrar100 = document.querySelector('#Mostrar100').textContent = ''
        let mostrar50 = document.querySelector('#Mostrar50').textContent = ''
        let mostrar10 = document.querySelector('#Mostrar10').textContent = ''
    } 

}

    var mostrar = document.querySelector('#btMostrar')
    mostrar.addEventListener('click', calcular)