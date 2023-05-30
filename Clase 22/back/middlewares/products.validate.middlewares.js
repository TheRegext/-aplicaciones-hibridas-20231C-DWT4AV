import * as productSchemas from '../schemas/products.schemas.js'
function validateProduct(req, res, next) {
    productSchemas.product.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then(function (product) {
            req.body = product
            next() // ejecuta el siguien paso
        })
        .catch(function (error) {
            res.status(400).json({ error })
        })
}

function validateProductUpdate(req, res, next) {
    productSchemas.productUpdate.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then(function (product) {
            req.body = product
            next() // ejecuta el siguien paso
        })
        .catch(function (error) {
            res.status(400).json({ error })
        })
}

export {
    validateProduct,
    validateProductUpdate
}