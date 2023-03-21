// CommonJS module syntax
/*
const http = require('node:http')
const pages = require('./pages/utils.js')
const products = require('./data/products.js')
*/
// ECMAScript 6 module syntax
import { createServer } from 'node:http'
import { createPage, createrProductList } from './pages/utils.js'
import products from './data/products.js'

const server = createServer(function (req, res) {

    if (req.url === '/') {
        res.write(createPage('Home', '<p>Brian Lara</p>'))
    }
    else if (req.url === '/materia') {
        res.write(createPage('Materia', '<p>Aplicaciones Hibridas</p>'))
    }
    else if (req.url === '/profesor') {
        res.write(createPage('Profesor', '<p>Lic. Brian Lara</p>'))
    }
    else if (req.url === '/productos') {
        res.write(createPage('Productos', createrProductList(products)))
    }
    else {
        res.write(createPage('Error', '<p>404</p>'))
    }

    res.end()
})


server.listen(2022)
