let zapatilla1 = {
    nombre: "Nike Air Jodan",
    precio: 180,
}

let zapatilla2 = {
    nombre: "Nike Dunk",
    precio: 100,
}

let zapatilla3 = {
    nombre: "Adidas Yeezy",
    precio: 200,
}

let zapatilla4 = {
    nombre: "Adidas Forum",
    precio: 145,
}

let continuar = true;

while(continuar){

    let zapatilla = prompt("Que zapatilla desea comprar? (Ingrese el número): \n 1.Nike Air Jodan $180usd \n 2.Nike Dunk $100usd \n 3.Adidas Yeezy $200usd \n 4.Adidas Forum $145usd \n 0.Salir");

    switch(zapatilla){
        case "1":
            alert(`${zapatilla1.nombre} precio final en ARS: ${precioArs(zapatilla1.precio)}`);
            continuar = false;
            break;
        case "2":
            alert(`${zapatilla2.nombre} precio final en ARS: ${precioArs(zapatilla2.precio)}`);
            continuar = false;
            break;
        case "3":
            alert(`${zapatilla3.nombre} precio final en ARS: ${precioArs(zapatilla3.precio)}`);
            continuar = false;
            break;
        case "4":
            alert(`${zapatilla4.nombre} precio final en ARS: ${precioArs(zapatilla4.precio)}`);
            continuar = false;
            break;
        default:
            alert("Dato no valido, introduce nuevamente")
    }
}    

function precioArs(precio) {
    return 1200 * precio;
}
