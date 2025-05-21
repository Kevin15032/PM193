const persona = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];

//Usa .find() para buscar a la persona con nombre "Luis".
const luis = persona.find(p => p.nombre === "Luis");
console.log(luis);
//Usa .forEach() para imprimir el nombre de cada persona con su edad.
console.log("\nLista de personas:");
persona.forEach(p => {
    console.log(`Nombre: ${p.nombre}, Edad: ${p.edad}`);
});
// 3. Sumar todas las edades con reduce()
const totalEdades = persona.reduce((suma, p) => suma + p.edad, 0);
console.log("\nSuma total de edades:", totalEdades);