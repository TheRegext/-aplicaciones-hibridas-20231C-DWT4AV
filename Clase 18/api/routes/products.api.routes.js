import { Router } from 'express'
import * as controller from '../controllers/products.api.controllers.js'
import ReviewRoute from './products.reviews.api.routes.js'
import { validateProduct, validateProductUpdate } from '../../middlewares/products.validate.middlewares.js'

const route = Router()

function captar(req, res, next) {
    console.log("Accedieron a los Productos")
    next()
}

route.use('/products', captar)

route.get('/products', controller.getProducts)
route.post('/products', [validateProduct], controller.createProduct)

route.all('/products/:idProduct', function (req, res, next) {
    console.log("Accediendo a un producto particular #" + req.params.idProduct)
    next()
})

route.get('/products/:idProduct', controller.getProductById)
route.put('/products/:idProduct', [validateProduct], controller.replaceProduct)
route.patch('/products/:idProduct', [validateProductUpdate], controller.updateProduct)
route.delete('/products/:idProduct', controller.deleteProduct)

route.use(ReviewRoute)

export default route