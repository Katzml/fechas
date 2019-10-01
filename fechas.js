
const feriados = 'feriados.json';

fetch(feriados)
.then(res=>res.json())
.then(json=>console.log(json));

const fechas =[];


//No Funciona no tocar porfavor
function AnotarFechaSinTrabajo(fecha){
    if(verSiEstaEnRangosDeFecha({fecha_ini, fecha_fin}, fecha)){
        fechasexcluidas.push(fecha)
    }
}

function verSiEstaEnRangosDeFecha({fecha_ini, fecha_fin}, fecha_comparar){
   [fecha_ini, fecha_fin, fecha_comparar] = eliminarHoraySegundos(fecha_ini, fecha_fin, fecha_comparar)
   return (fecha_ini - fecha_comparar) <= 0 && (fecha_fin - fecha_comparar) >= 0
}

function eliminarHoraySegundos(...fechas){
    
    if(fechas.length == 1){
        var fecha = fechas[0]
        fecha.setHours(0)
        fecha.setMilliseconds(0)
        fecha.setMinutes(0)
        fecha.setSeconds(0)
        return fecha
    }
    return fechas.map(fecha => {
        fecha.setHours(0)
        fecha.setMilliseconds(0)
        fecha.setMinutes(0)
        fecha.setSeconds(0)
        return fecha
    })
}

var fecharango = {fecha_ini:new Date('September 19, 2019 03:24:00'),
fecha_fin: new Date('September 25, 2019 03:24:00')}


var fecha1 = new Date('September 23, 2019 03:24:00')
var fecha2 = new Date('September 26, 2019 03:24:00')
var fecha3 = new Date('September 17, 2019 03:24:00')

console.log(verSiEstaEnRangosDeFecha(fecharango, fecha1));