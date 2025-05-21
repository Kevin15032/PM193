const persona = {
    nombre: "Kevin",
    edad: 23,
    direccion: {
        ciudad: "QRO",
        pais: "MX",
    },
};

const { nombre, edad, direccion: { ciudad, pais } } = persona;
console.log("Me llamo", nombre +" Tengo", edad +" y vivo en", ciudad, pais);
