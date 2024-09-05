import fs from 'fs'

fs.readFile('numeros.txt', 'utf8', (error, data) => {
    if (error) {
        throw error;
    }
    const numeros = data.split('\n').map(Number);
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    console.log('Números pares:', numerosPares);
});
