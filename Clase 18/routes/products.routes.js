import express from 'express'
import * as controllers from '../controllers/products.controllers.js'

const route = express.Router()

route.get('/products', controllers.getProducts)

route.get('/products/nuevo', controllers.createNewProductPage)
route.post('/products/nuevo', controllers.createProduct)

route.get('/products/:idProduct/edit', controllers.editProductPage)
route.post('/products/:idProduct/edit', controllers.editProduct)

route.get('/products/:idProduct/delete', controllers.deleteProductPage)
route.post('/products/:idProduct/delete', controllers.deleteProduct)

route.get('/products/:idProduct', controllers.getProductDetail)


export default route