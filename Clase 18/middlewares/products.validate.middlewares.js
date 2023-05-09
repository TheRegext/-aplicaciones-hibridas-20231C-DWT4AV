import { productScheme, productUpdateScheme } from '../../schemes/products.schemes.js'
function validateProduct(req, res, next) {
    productScheme.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then(function (product) {
            req.body = product
            next() // ejecuta el siguien paso
        })
        .catch(function (error) {
            res.status(400).json({ error })
        })
}

function validateProductUpdate(req, res, next) {
    productUpdateScheme.validate(req.body, { abortEarly: false, stripUnknown: true })
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