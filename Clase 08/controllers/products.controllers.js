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

export {
    getProducts,
    getProductDetail
}