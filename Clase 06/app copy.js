// CommonJS module syntax
/*
const http = require('node:http')
const pages = require('./pages/utils.js')
const products = require('./data/products.js')
*/
// ECMAScript 6 module syntax
import { createServer } from 'node:http'
import { readFile } from 'node:fs'

import { createPage, createrProductList } from './pages/utils.js'
import products from './data/products.js'

const server = createServer(function (req, res) {
    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }


    console.log("Inicio de la peticion")

    if (req.url === '/') {
        res.write(createPage('Home', '<p>Brian Lara</p>'))
        res.end()
    }
    else if (req.url === '/materia') {
        res.write(createPage('Materia', '<p>Aplicaciones Hibridas</p>'))
        res.end()
    }
    else if (req.url === '/profesor') {
        res.write(createPage('Profesor', '<p>Lic. Brian Lara</p>'))
        res.end()
    }
    else if (req.url === '/productos') {
        res.write(createPage('Productos', createrProductList(products)))
        res.end()
    }
    else if (req.url === '/hola.html') {
        // leer el archivo hola.html
        readFile('./public/hola.html', function (err, data) {

            if (err) {
                res.write(createPage('Error', '<p>No se pudo leer el archivo hola.html</p>'))
            }
            else {
                // enviamos el contenido del archivo hola.html al cliente
                res.write(data)
                console.log("Envio de la DATA!")
            }

            res.end()

        })
    }
    else if (req.url === '/index.html') {
        // leer el archivo hola.html
        readFile('./public/index.html', function (err, data) {

            if (err) {
                res.write(createPage('Error', '<p>No se pudo leer el archivo hola.html</p>'))
            }
            else {
                // enviamos el contenido del archivo hola.html al cliente
                res.write(data)
                console.log("Envio de la DATA!")
            }

            res.end()

        })
    }
    else if (req.url === '/contact.html') {
        // leer el archivo hola.html
        readFile('./public/contact.html', function (err, data) {

            if (err) {
                res.write(createPage('Error', '<p>No se pudo leer el archivo hola.html</p>'))
            }
            else {
                // enviamos el contenido del archivo hola.html al cliente
                res.write(data)
                console.log("Envio de la DATA!")
            }

            res.end()

        })
    }
    else if (req.url === '/products.html') {
        // leer el archivo hola.html
        readFile('./public/products.html', function (err, data) {

            if (err) {
                res.write(createPage('Error', '<p>No se pudo leer el archivo hola.html</p>'))
            }
            else {
                // enviamos el contenido del archivo hola.html al cliente
                res.write(data)
                console.log("Envio de la DATA!")
            }

            res.end()

        })
    }
    else if (req.url === '/css/style.css') {
        // leer el archivo hola.html
        readFile('./public/css/style.css', function (err, data) {

            if (err) {
                res.write(createPage('Error', '<p>No se pudo leer el archivo hola.html</p>'))
            }
            else {
                // enviamos el contenido del archivo hola.html al cliente
                res.write(data)
                console.log("Envio de la DATA!")
            }

            res.end()

        })
    }
    else {
        res.write(createPage('Error', '<p>404</p>'))
        res.end()
    }


    console.log("Fin de la peticion")
})


server.listen(2022)
