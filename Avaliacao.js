const readline = require ('readline-sync')

console.log ('-------- DESEMPENHO DOS FUNCIONÁRIOS ----------')
console.log ('  ')

let nomeFuncionario = readline.question ('Informe o nome do funcionário: ')
let cargoOcupado = readline.question ('Cargo que o funcionário ocupa: ')
let salarioBase = readline.questionFloat ('Qual o salário base do funcionário: ')
let resultadoAlcancado = readline.questionFloat('Resultado alcancado: ')

console.log ('-------- Meta Mensal ---------')
console.log ('  ')

let metaMensal = 10000
let percentual = (resultadoAlcancado/metaMensal) * 100
let diferenca = (100 - percentual)


if(metaMensal <= resultadoAlcancado){
    console.log ('Você alcançou a meta estabelecida!')

}else {
    console.log ('Você não alcançou a meta estabelecida')
    console.log(`Vocẽ alcançou ${percentual}% da meta e faltou ${Math.abs(diferenca)}%`)
}
console.log ('  ')

console.log ('------ DESEMPENHO -------')
console.log ('  ')
 
if (percentual < 70){
    console.log ('Insuficiente')
}else if(percentual < 100){
    console.log('Satisfatório')
}else{
    console.log('Excelente')
}
console.log ('  ')

console.log('------- BÔNUS -------')
console.log ('  ')

if(percentual < 70){
    console.log ('sem bônus')

}else if(percentual < 100){
    console.log('Bônus de 5% sobre o salário base')

}else
    console.log('Bônus de 10% sobre o salário base')
    console.log ('  ')