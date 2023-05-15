function sumar(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma
}

function sumarPares(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += (array[i] % 2 == 0) ? array[i] : 0
    }
    return suma
}

function sumarImpares(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += (array[i] % 2 != 0) ? array[i] : 0
    }
    return suma
}

const array = [2, 8, 5, 6, 8, 7]
console.log("La suma de todos es: ", sumar(array))
console.log("La suma de los pares es: ", sumarPares(array))
console.log("La suma de los impares es: ", sumarImpares(array))
