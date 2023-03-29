import express from 'express'

let contador = 0
const app = express() // creea el servidor

// parse el body de las peticiones POST
app.use(express.urlencoded({ extended: true }))

// contendido estatico
app.use('/', express.static('public'))

// contenido dinamico
app.get('/', function (req, res) {
    res.send('Hola mundo desde Express')
})

app.get('/contact', function (req, res) {
    res.send('Contacto')
})

app.get('/count', function (req, res) {
    contador++
    res.send('Contador: ' + contador)
})


// GET   - QUERY - Obtener un recurso
// POST  - BODY  - Crear un recursos


app.get('/saludo', function (req, res) {
    let nombre = req.query.nombre

    res.send('Hola ' + nombre)
})


app.post('/saludo', function (req, res) {
    let nombre = req.body.nombre

    res.send('Hola ' + nombre)
})




app.listen(2023, function () {
    console.log('Servidor corriendo en el host http://localhost:2023')
})