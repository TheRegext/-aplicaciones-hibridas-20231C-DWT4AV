import * as services from '../services/products.services.js'
import * as reviewServices from '../services/products.reviews.services.js'
import * as views from '../views/products.views.js'

function getProducts(req, res) {
    services.getProducts({ deleted: true })
        .then(function (products) {
            res.send(views.createProductListPage(products))
        })
}

// ENCADENAR
async function getProductDetail(req, res) {
    const idProduct = req.params.idProduct
    const product = await services.getProductById(idProduct)

    if (product) {
        const reviews = await reviewServices.getReviews(idProduct)
        res.send(views.createProductPage(product, reviews?.reviews || []))
    }
    else {
        res.send(views.createPage('Producto no encontrado', '<p>El producto no existe</p>'))
    }
}

/* ANIDAMIENTO
function getProductDetail(req, res) {
    const idProduct = req.params.idProduct

    services.getProductById(idProduct)
        .then(function (product) {
            if (product) {
                reviewServices.getReviews(idProduct)
                    .then(function (reviews) {
                        res.send(views.createProductPage(product, reviews?.reviews || []))
                    })

            }
            else {
                res.send(views.createPage('Producto no encontrado', '<p>El producto no existe</p>'))
            }

        })
}
*/
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


function editProductPage(req, res) {
    const id = req.params.idProduct

    services.getProductById(id)
        .then(function (product) {
            if (product) {
                res.send(views.formEditProduct(product))
            }
            else {
                res.send(views.createPage('Producto no encontrado', '<p>El producto no existe</p>'))
            }
        })

}


function editProduct(req, res) {
    const id = req.params.idProduct
    const product = {
        name: req.body.name,
        price: parseInt(req.body.price),
        description: req.body.description
    }

    services.editProduct(id, product)
        .then(function (product) {
            if (product) {
                res.send(views.createPage('Producto modificado', `<p>El producto ${product.name} ha sido modificado</p>`))
            }
            else {
                res.send(views.createPage('Producto no encontrado', '<p>El producto no existe</p>'))
            }
        })
        .catch(function (error) {
            res.send(views.createPage('Error modificando producto', `<p>Se ha producido un error modificando el producto</p>`))
        })
}



function deleteProductPage(req, res) {
    const id = req.params.idProduct

    services.getProductById(id)
        .then(function (product) {
            if (product) {
                res.send(views.formDeleteProduct(product))
            }
            else {
                res.send(views.createPage('Producto no encontrado', '<p>El producto no existe</p>'))
            }
        })

}

function deleteProduct(req, res) {
    const id = req.params.idProduct

    services.deleteProduct(id)
        .then(function (product) {
            if (product) {
                res.send(views.createPage('Producto eliminado', `<p>El producto ${product.name} ha sido eliminado</p>`))
            }
            else {
                res.send(views.createPage('Producto no encontrado', '<p>El producto no existe</p>'))
            }
        })
        .catch(function (error) {
            res.send(views.createPage('Error eliminando producto', `<p>Se ha producido un error eliminando el producto</p>`))
        })
}

export {
    getProducts,
    getProductDetail,
    createNewProductPage,
    createProduct,
    editProductPage,
    editProduct,
    deleteProductPage,
    deleteProduct
}