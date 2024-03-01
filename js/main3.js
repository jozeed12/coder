// for(let i=0; i<numeros.length; i++){
//     console.log(numeros[i]);
// }

// for (const elemento of numeros) {
//     console.log(elemento);
// }

// function sumarRango(inicio,fin){
//     let total = 0;
//     for(let i=inicio; i<=fin; i++){
//         total += i;
//     }
//     return total;
// }

// let total = 0;
// for(let i=1; i<=10; i++){
//     total += i;
// }

// console.log(total);
// console.log(sumarRango(1,10));

// function mayorQue(n){
//     return (m)=> m>n;
// }

// const mayorQueDiez = mayorQue(10);
// console.log(mayorQueDiez(12));

// function asignarOperacion(op){
//     switch (op) {
//         case "+":
//             return (n1,n2) => n1 + n2;
//         case "-":
//             return (n1,n2) => n1 - n2;
//         default:
//             return "Operacion no valida";
//     }
// }

// const sumar = asignarOperacion("+");
// console.log(sumar(5,3));

// const numeros = [1,3,4,6,3,5];

// function porCadaUno(arr,fn){
//     for (const elemento of arr) {
//         fn(elemento);
//     }
// }

// porCadaUno(numeros, console.log);

// const cuadruple = [];

// function porCuatro(n){
//     return cuadruple.push(n*4);
// }

// porCadaUno(numeros, porCuatro);
// console.log(cuadruple);

// numeros.forEach((el)=>{
//     return cuadruple.push(el*4);
// });

// console.log(cuadruple);

// const servicios = [
//     {id:1, nombre:"Backup", precio: 10000},
//     {id:2, nombre:"Instalacion programas", precio:5000},
//     {id:3, nombre:"Instalacion windows", precio:4000},
//     {id:4, nombre:"Instalacion placa de video", precio:7000},
//     {id:5, nombre:"Instalacion CPU", precio:10000},
// ];

// const encontrado = servicios.filter((obj)=>{
//     return obj.nombre.includes("Instalacio");
// });

// console.log(encontrado);

// const precioActualizado = servicios.map((el)=>{
//     return {
//         id: el.id,
//         nombre: el.nombre,
//         precio: el.precio * 1.3
//     }
// })


// console.log(servicios);
// console.log(precioActualizado);

// servicios.forEach((e,i) => {
//     console.log(`${i} ${e.nombre}`);
// });

// const producto = servicios.filter(e => e.precio === 10000);

// console.log(producto);


// let boton = document.querySelector('.btn-menu');
// let menu = document.querySelector('.nav');

// boton.addEventListener('click', mostrarOcultarMenu);

// function mostrarOcultarMenu() {
//     if (menu.classList.contains('oculto')) {
//         menu.classList.remove('oculto');
//         boton.textContent = 'Cerrar';
//     } else {
//         menu.classList.add('oculto');
//         boton.textContent = 'Menu';
//     }
// }   

const tickets3D = [
    { id: 1, pelicula: "ant-man quantunmania", precio: 2400 },
    { id: 2, pelicula: "super mario bros, la película", precio: 2300 }, 
    { id: 3, pelicula: "john wick 4", precio: 2600 }, 
    { id: 4, pelicula: "the wale", precio: 2200 },
    { id: 5, pelicula: "shazam, la furia de los dioses", precio: 2575 },  
    { id: 6, pelicula: "creed 3", precio: 2389 },  
    { id: 7, pelicula: "the marvels", precio: 1500 },
    { id: 8, pelicula: "john wick 3", precio: 1000 }
  ];

function buscarPelicula(arr, titulo){
    return arr.filter((el) => el.pelicula.includes(titulo));
}

let encontrado = buscarPelicula(tickets3D, "wick");
console.log(encontrado);

const ticketsReservados = [];

function reservar (arr, pelicula){
    arr.push(...pelicula);
    return arr;
}

reservar(ticketsReservados, encontrado);
console.log(ticketsReservados);

function comprarTickets(tickets, recargo){
    return tickets.reduce((acc, el)=>{
        return acc + el.precio
    },recargo)
}

console.log(comprarTickets(ticketsReservados,2000));

function raiz(a){
        if (a > 0) {
            return Math.sqrt(a);
        } else {
            return 'Error';
        }
};

console.log(raiz(16));

const hexa = [
    "0",
    "1",
    "2",
    "3",
    "4",  
    "5", 
    "6",
    "7", 
    "8",  
    "9", 
    "A", 
    "B", 
    "C",
    "D",
    "E",
    "F",  
  ];

  let color = '';

  for (let i=0; i<6; i++) {
    let aleatorio = Math.round(Math.random()*(hexa.length-1));
    console.log(aleatorio);
    color = color + hexa[aleatorio];
}

console.log(color);

