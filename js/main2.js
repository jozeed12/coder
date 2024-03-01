const num = [1,2,4,64,2,66];

// push agrega elementos al final

num.push("hola");
console.log(num)


// Definición de la clase `personaje`
class personaje {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

// Creación de una instancia de `personaje` llamada `vegeta`
const dragonball = new personaje("vegeta");

// Array `biblioteca` con un elemento inicial "Goku"
const biblioteca = ["Goku"];

// Empujar una instancia de `personaje` en lugar del constructor
biblioteca.push(dragonball);

console.log(biblioteca);
