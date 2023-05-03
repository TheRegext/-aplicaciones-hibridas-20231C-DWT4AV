import * as service from '../../services/products.services.js'

function getProducts(req, res) {
    const filter = req.query

    service.getProducts(filter)
        .then(function (products) {
            res.status(200).json(products) // res.send(JSON.stringify(products))
        })

}

function createProduct(req, res) {
    const product = {
        name: req.body.name,
        price: parseInt(req.body.price),
        description: req.body.description,
        tags: req.body.tags,

    }
    // const product = req.body

    service.createProduct(product)
        .then(function (product) {
            res.status(201).json(product)
        })
}

function getProductById(req, res) {
    const idProduct = req.params.idProduct

    service.getProductById(idProduct)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `Producto #${idProduct} no encontrado.` } })
            }
        })
}

function replaceProduct(req, res) {
    const idProduct = req.params.idProduct
    const product = {
        name: req.body.name,
        price: parseInt(req.body.price),
        description: req.body.description,
        tags: req.body.tags,

    }

    service.replaceProduct(idProduct, product)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `Producto #${idProduct} no encontrado.` } })
            }
        })
}

function updateProduct(req, res) {
    const idProduct = req.params.idProduct

    const product = {}

    if (req.body.name) {
        product.name = req.body.name
    }

    if (req.body.price) {
        product.price = req.body.price
    }

    if (req.body.description) {
        product.description = req.body.description
    }

    if (req.body.tags) {
        product.tags = req.body.tags
    }

    service.editProduct(idProduct, product)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `Producto #${idProduct} no encontrado.` } })
            }
        })
}

function deleteProduct(req, res) {
    const id = req.params.idProduct

    service.deleteProduct(id)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `Producto #${idProduct} no encontrado.` } })
            }
        })
}


export {
    getProducts,
    createProduct,
    getProductById,
    replaceProduct,
    deleteProduct,
    updateProduct
}