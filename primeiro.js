var numero = 10

//numero = "ISSO AQUI DA ERRO"

//COMENTÁRIO DE LINHA

/*
    COMENTÁRIO DE BLOCO

*/

var nome = "Paulo Augusto Ponciano"

/*
    JavaScript possui 4 tipos de variáveis:
    String: Texto
    Number: número inteiros e decimais
    Boolean: true or false
    Object: objeto
*/

/*
    Símbolos para realização de cálculos aritméticos
    +: Soma
    -: Substração
    *: Multiplicação
    /: Divisão
    ^: Potência
    %: Resto da Divisão (MOD)
    (): parêntes para delimitar diferentes escopos de cálculo
*/

var resultado = 10 + 5 - ((3 + 9) * 2) / 3

resultado = 2 ^ 3

/*
    Operadores Relacionais
    ==: igualdade
    != : diferença
    >: maior
    <: menor
    >=: maior ou igual
    <=: menor ou igual
    ===: exatamente igual
    !==: exatamente diferente
*/

var valor1 = 10
var valor2 = "10"

//Codificação mínima de estrutura de decisão
if (valor1 === valor2) {
    //Bloco de código que executa apenas se meu teste for VERDADEIRO
}
else {
    //Bloco de código que executa caso teste dê falso
}

/*
    Operadores Lógicos
    &&: E
    ||: OU
    !: NEGAÇÃO
    Tabela verdade:
    E:
    V - V: V
    F - V: F
    V - F: F
    F - F: F

    OU:
    V - V: V
    F - V: V
    V - F: V
    F - F: F

    NOT:
    V: F
    F: V
*/

if (10 == 5 && (5 > 8 || 3 <= 4)) {
    
}

console.log("MENSAGEM ESCRITA NO CONSOLE DE EXECUÇÃO")

