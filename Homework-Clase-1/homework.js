let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];
// PRIMER PUNTO 

// console.log('Nombre del libro', libros[1].titulo + ' Nombre autor',libros[1].autor );

// libros[0].paginas= 350;
// console.log(libros[0]);

// const nuevoLibro = libros.map(libro => ({
//     titulo: libro.titulo,
//     autor: libro.autor
//   }));

//   console.log(nuevoLibro)

// SEGUNDO PUNTO 
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];


let promedioFinal = estudiantes[0]
for (let index = 1; index < estudiantes.length; index++) {
    let estudiante = estudiantes[index]
    if ( estudiante.promedio > promedioFinal.promedio ) {
        promedioFinal= estudiante
    }
}

console.log( promedioFinal)


// let sumaEstudiantes = 0;

// for (let index = 0; index < estudiantes.length; index++) {
//     sumaEstudiantes = sumaEstudiantes + estudiantes[index].edad;
// }
// let promedioEdad = sumaEstudiantes / estudiantes.length;
// console.log('la suma de las edades es:',sumaEstudiantes, 'El promedio de edad es:',promedioEdad)

// TERCER PUNTO 
// let productos = [
//     { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
//     { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
//     { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
//     { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
// ];

// let ropa = productos.filter(producto => producto.categoria === 'Ropa')
// let preciosMayores = productos.filter( prducto => prducto.precio > 30)
// console.log(ropa)
// console.log( preciosMayores)