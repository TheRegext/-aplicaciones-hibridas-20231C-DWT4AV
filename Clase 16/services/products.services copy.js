import { readFile, writeFile } from 'node:fs/promises'


async function getProducts(filter = {}) {
    return readFile('./data/products.json')
        .then(function (data) {
            return JSON.parse(data) // convierte el string a objeto
        })
        .then(function (products) {
            if (filter.deleted) {
                const productsFiltered = []

                for (let i = 0; i < products.length; i++) {
                    if (!products[i].deleted) {
                        productsFiltered.push(products[i])
                    }
                }

                return productsFiltered
            }
            else {
                return products
            }
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

async function createProduct(product) {
    const products = await getProducts()

    const newProduct = {
        ...product,
        id: products.length + 1,
    }

    products.push(newProduct)

    await writeFile('./data/products.json', JSON.stringify(products))

    return newProduct
}

async function editProduct(idProduct, product) {
    const products = await getProducts()
    let editProduct = null

    for (let i = 0; i < products.length; i++) {
        if (products[i].id == idProduct) {
            products[i] = {
                ...products[i],
                ...product, // spread operator
                id: products[i].id,
            }
            editProduct = products[i]
            break
        }
    }

    if (editProduct) {
        await writeFile('./data/products.json', JSON.stringify(products))
    }

    return editProduct
}


async function deleteProduct(idProduct) {
    const products = await getProducts()
    let editProduct = null

    for (let i = 0; i < products.length; i++) {
        if (products[i].id == idProduct) {
            products[i].deleted = true
            editProduct = products[i]
            break
        }
    }

    if (editProduct) {
        await writeFile('./data/products.json', JSON.stringify(products))
    }

    return editProduct


}

export {
    getProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct
}