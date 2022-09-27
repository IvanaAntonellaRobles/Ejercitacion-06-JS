      
    /* 1ra forma */

function obtenerDatosDeCiudad(nombre, poblacion, pais) {
    return `La ciudad de ${nombre} tiene una poblacion de ${poblacion} habitantes y esta ubicada en ${pais}`
}

console.log(obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina'))




    /* 2da forma */ 

function obtenerDatosDeCiudad (nombre, poblacion, pais) {
    let nombreCiudad = nombre;
    let cantidadPoblacion = poblacion;
    let nombrePais = pais;
    return `La ciudad de ${nombre} tiene una poblacion de ${poblacion} habitantes y esta ubicada en ${pais}.`
}

console.log(obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina'))


