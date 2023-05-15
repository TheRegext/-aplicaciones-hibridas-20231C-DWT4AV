const array = [2, 8, 5, 6, 8, 7]

console.log("La suma de todos es: ", array.reduce((prev, actual) => actual + prev, 0))
console.log("La suma de los pares es: ", array.reduce((prev, actual) => prev + (actual % 2 == 0 ? actual : 0), 0))
console.log("La suma de los impares es: ", array.reduce((prev, actual) => prev + (actual % 2 != 0 ? actual : 0), 0))

console.log("Primer Impar: ", array.find(e => e % 2 != 0)) // buscar
console.log("Primer Pares: ", array.filter(e => e % 2 == 0)) // filtra
console.log("Transformar: ", array.map(e => `<span>Numero - ${e}</span>`)) // filtra
console.log("Primer Pares: ", array.filter(e => e % 2 != 0).map(e => e * 2)) // filtra