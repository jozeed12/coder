let entradaAño;
let entradaMes;
let entradaDia;

let salidaAño;
let salidaMes;
let salidaDia;

document.querySelector('#fechaEntrada').addEventListener('change', function(){
    let fechaSeleccionadaEntrada = new Date(this.value);

    fechaSeleccionadaEntrada.setMinutes(fechaSeleccionadaEntrada.getMinutes() + fechaSeleccionadaEntrada.getTimezoneOffset());
      
    entradaAño = fechaSeleccionadaEntrada.getFullYear();
    entradaMes = fechaSeleccionadaEntrada.getMonth() + 1; // Se suma 1 ya que los meses van de 0 a 11
    entradaDia = fechaSeleccionadaEntrada.getDate();
    
    calcularPrecioEstadia();
});

document.querySelector('#fechaSalida').addEventListener('change', function(){
    let fechaSeleccionadaSalida = new Date(this.value);

    fechaSeleccionadaSalida.setMinutes(fechaSeleccionadaSalida.getMinutes() + fechaSeleccionadaSalida.getTimezoneOffset());
      
    salidaAño = fechaSeleccionadaSalida.getFullYear();
    salidaMes = fechaSeleccionadaSalida.getMonth() + 1; // Se suma 1 ya que los meses van de 0 a 11
    salidaDia = fechaSeleccionadaSalida.getDate();
    
    calcularPrecioEstadia();
});

const precioDias = [
    {dia:"Domingo", precio: 3000},
    {dia:"Lunes", precio: 2000},
    {dia:"Martes", precio: 2000},
    {dia:"Miércoles", precio: 2000},
    {dia:"Jueves", precio: 3000},
    {dia:"Viernes", precio: 4000},
    {dia:"Sábado", precio: 5000},
];

function calcularPrecioEstadia() {
    if (entradaAño && entradaMes && entradaDia && salidaAño && salidaMes && salidaDia) {
        const fechaIngreso = new Date(parseInt(entradaAño), parseInt(entradaMes) - 1, parseInt(entradaDia));
        const fechaEgreso = new Date(parseInt(salidaAño), parseInt(salidaMes) - 1, parseInt(salidaDia));

        const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const diaInicioSemana = fechaIngreso.getDay();
        

        const inicioDia = diasSemana[diaInicioSemana];

        function estadia(ingreso, egreso) {
            // No olvides almacenar el valor de getTime()
            const tiempoIngreso = ingreso.getTime();
            const tiempoEgreso = egreso.getTime();

            const milisegundosDias = 86400000;

            let dias = (tiempoEgreso - tiempoIngreso) / milisegundosDias;
            return dias;
        }

        const cantidadDias = estadia(fechaIngreso, fechaEgreso);

        const indiceInicio = precioDias.findIndex(el => el.dia === inicioDia);

        let sumaTotal = 0;

        for (let i = 0; i < cantidadDias; i++) {
            const indiceActual = (indiceInicio + i) % precioDias.length;
            sumaTotal = sumaTotal + precioDias[indiceActual].precio;
        }

        console.log(entradaAño)
        console.log(entradaMes)
        console.log(entradaDia)

        console.log(salidaAño)
        console.log(salidaMes)
        console.log(salidaDia)

        const enviar = document.querySelector('#mostrar-resultado');
        enviar.addEventListener('click', mostrarResultado); // No agregues paréntesis aquí

        function mostrarResultado() {
            alert(`Hizo una reserva para el día: ${entradaDia}/${entradaMes}/${entradaAño} hasta el día ${salidaDia}/${salidaMes}/${salidaAño} y el precio total para ${cantidadDias} días es de: $${sumaTotal}`);
        }
    }
}









