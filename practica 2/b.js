const productos = [
    {nombre: "laptop", precio: 12000},
    {nombre: "mouse", precio: 250},
    {nombre: "teclado", precio: 750},
    {nombre: "Monitor", precio: 3000}
];

const filtrado = productos.filter((producto) => producto.precio > 1000)
.map((producto) => producto.nombre);
console.log(filtrado);