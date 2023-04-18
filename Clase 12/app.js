import express from 'express'
import ProductRoute from './routes/products.routes.js'
import ProductRouteApi from './api/routes/products.api.routes.js'

const app = express() // creea el servidor
app.use(express.urlencoded({ extended: true }))
app.use('/api', express.json()) // en caso de que el body este en JSON, se hace el parseBody


app.use('/', express.static('public'))

app.use('/', ProductRoute)
app.use('/api', ProductRouteApi)


app.listen(2023, function () {
    console.log('Servidor corriendo en el host http://localhost:2023')
})