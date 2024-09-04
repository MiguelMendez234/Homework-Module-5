import fs from 'fs'

const calculadora = process.argv.slice(2)
const num1 = parseFloat(calculadora[0]);
const num2 = parseFloat(calculadora[2])
let resultado = 0

if(calculadora[1] === '*') {
   resultado = num1 * num2
   console.log(`El resultado de ${num1} x ${num2} = ${resultado} `)

} else if (calculadora[1]=== '/' ){
    resultado = num1 / num2
    console.log(`El resultado de ${num1} / ${num2} = ${resultado} `)

}else if (calculadora[1]=== '+' ){
    resultado = num1 + num2
    console.log(`El resultado de ${num1} + ${num2} = ${resultado} `)
    
}else if (calculadora[1]=== '-' ){
    resultado = num1 - num2
    console.log(`El resultado de ${num1} - ${num2} = ${resultado} `)
    
}else{
    console.log('Operación no encontrada')
}