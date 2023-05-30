import express from 'express'
import ProductRoute from './routes/products.routes.js'
import ProductRouteApi from './api/routes/products.api.routes.js'
import AccountRoute from './api/routes/account.api.routes.js'
import cors from 'cors'

const app = express() // creea el servidor
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use('/api', express.json()) // en caso de que el body este en JSON, se hace el parseBody

app.use('/', express.static('public'))

app.use('/', ProductRoute)
app.use('/api', ProductRouteApi)
app.use('/api', AccountRoute)

app.listen(2023, function () {
    console.log('Servidor corriendo en el host http://localhost:2023')
})