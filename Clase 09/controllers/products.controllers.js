import * as services from '../services/products.services.js'
import * as views from '../views/products.views.js'


function getProducts(req, res) {

    services.getProducts()
        .then(function (products) {
            res.send(views.createProductListPage(products))
        })
}


function getProductDetail(req, res) {
    const idProduct = req.params.idProduct

    services.getProductById(idProduct)
        .then(function (product) {
            if (product) {
                res.send(views.createProductPage(product))
            }
            else {
                res.send(views.createPage('Producto no encontrado', '<p>El producto no existe</p>'))
            }

        })
}

function createNewProductPage(req, res) {
    res.send(views.createNewProductPage())
}

function createProduct(req, res) {
    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }

    services.createProduct(product)
        .then(function (newProduct) {
            res.send(views.createPage('Producto creado', `<p>El producto ${newProduct.name} ha sido creado con el id ${newProduct.id}</p>`))
        })
        .catch(function (error) {
            res.send(views.createPage('Error creando producto', `<p>Se ha producido un error creando el producto</p>`))
        })
}

export {
    getProducts,
    getProductDetail,
    createNewProductPage,
    createProduct
}