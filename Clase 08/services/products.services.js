import { readFile } from 'node:fs/promises'


async function getProducts() {
    return readFile('./data/products.json')
        .then(function (data) {
            return JSON.parse(data) // convierte el string a objeto
        })
        .catch(function () {
            return []
        })
}

async function getProductById(idProduct) {
    return getProducts()
        .then(function (products) {
            let product = null
            for (let i = 0; i < products.length; i++) {
                if (products[i].id == idProduct) {
                    product = products[i]
                    break // corta cualquier ciclo repetitivo 
                }
            }

            return product
        })
}

export {
    getProducts,
    getProductById
}