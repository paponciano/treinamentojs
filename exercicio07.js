var ladoA = 7
var ladoB = 6
var ladoC = 5

if ((ladoA + ladoB) > ladoC && (ladoB + ladoC) > ladoA && (ladoC + ladoA) > ladoB) {
    //SE FOR TRIÂNGULO, REALIZO CONDICIONANTES PARA VERIFICAR O TIPO, SE
    // EQUILÁTERO, ISÓSCELES OU ESCALENO
    if (ladoA === ladoB && ladoA === ladoC) {
        console.log("Triângulo Equilátero")
    }
    else if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoC === ladoB)) {
        console.log("Triângulo Isósceles")
    }
    else {
        console.log("Triângulo Escaleno")
    }
}
else {
    console.log("Não é um triângulo...")
}