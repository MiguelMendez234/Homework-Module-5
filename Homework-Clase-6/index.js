import http from 'http'; 
import 'dotenv/config' 

const port = process.env.PORT 


const products =  [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
];

const productosTexto = JSON.stringify(products)

const productosId = products.map(producto => producto.id) 
const productosIdTexto = JSON.stringify(productosId)

console.log(productosIdTexto)

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    switch(req.url){
        case '/productos':
            res.write(productosTexto) // traemos los productos 
            res.end()
        case '/productos/:id':
            res.write(productosIdTexto) // traemos los id 
            res.end()
        default:
            res.write('Error 404: Not found')
    }
    res.end()
}).listen(port)

