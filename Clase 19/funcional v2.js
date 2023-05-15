function sumar(array, callback) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += callback(array[i])
    }
    return suma
}

const array = [2, 8, 5, 6, 8, 7]

console.log("La suma de todos es: ", sumar(array, function (e) {
    return e
}))

console.log("La suma de los pares es: ", sumar(array, function (e) {
    return (e % 2 == 0) ? e : 0
}))

console.log("La suma de los impares es: ", sumar(array, function (e) {
    return (e % 2 != 0) ? e : 0
}))

/*
/// expresion es cualquier cosa que de un resultado
let valor = 2 + 6 // expresion numerica
let obj = {p: 12} // expresion de objeto
let jk = if(){} // no es una expresion
*/
/*
// funciones creadoras - por que tienen contexto
// tradicional nombrada
function nombrada(params) {
    return 0
}

// tradicional anonima
// como expresion funcional
function (params) {
    return 0
}

// funciones no creadoras - por que no tienen contexto
// funcion flecha (lambda)
// expresion funcional

let p12 = (a, b) => {
    return a + b
}

let p = (a, b) => a + b

let k = a => a * 2
console.log(k(10))
*/