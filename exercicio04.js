var salario = 10000
var valorReajuste = 0

if (salario <= 2800) {
    valorReajuste = 0.2
}
else if (salario > 2800 && salario <= 7000) {
    valorReajuste = 0.15
}
else if (salario > 7000 && salario <= 15000) {
    valorReajuste = 0.1
}
else {
    valorReajuste = 0.05
}

//interpolation
console.log(`Salário Atual: ${salario}.
    O percentual de aumento foi: ${valorReajuste * 100}%.
    O aumento aplicado foi de: ${salario * valorReajuste}.
    O novo salário é: ${salario + (salario * valorReajuste)}.`)
