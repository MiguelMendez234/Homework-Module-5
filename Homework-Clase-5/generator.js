import { error } from 'console'
import fs from 'fs'


let numbers = '';
for(let i = 1; i <= 100; i++){
    numbers += i + '\n';
}

fs.writeFile('numeros.txt', numbers, (error)=> {
    if(error) console.log(error)
    else console.log('Archivo actualizado ')
});