function sumar(array, callback) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += callback(array[i])
    }
    return suma
}

const array = [2, 8, 5, 6, 8, 7]

console.log("La suma de todos es: ", sumar(array, e => e))

console.log("La suma de los pares es: ", sumar(array, e => (e % 2 == 0) ? e : 0))

console.log("La suma de los impares es: ", sumar(array, e => (e % 2 != 0) ? e : 0))
