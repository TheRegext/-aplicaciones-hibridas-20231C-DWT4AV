import { Router } from 'express'
import * as controller from '../controllers/products.api.controllers.js'
import ReviewRoute from './products.reviews.api.routes.js'

const route = Router()

// defino las rutas
// route.[ACCION]('[IDENTIFICADOR DE RECURSO]', CONTROLADOR)
route.get('/products', controller.getProducts)
route.post('/products', controller.createProduct)

route.get('/products/:idProduct', controller.getProductById)
route.put('/products/:idProduct', controller.replaceProduct)
route.patch('/products/:idProduct', controller.updateProduct)
route.delete('/products/:idProduct', controller.deleteProduct)

route.use(ReviewRoute)

export default route