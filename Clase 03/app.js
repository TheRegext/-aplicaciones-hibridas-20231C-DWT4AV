const http = require('node:http')

const PRODUCTOS = [
    {
        id: 1,
        name: "Café Expreso",
        price: 200
    }
    , {
        id: 2,
        name: "Café Americano",
        price: 250
    }
    , {
        id: 3,
        name: "Café Cortado",
        price: 200
    }
    , {
        id: 4,
        name: "Café Doble",
        price: 250
    }
    , {
        id: 5,
        name: "Café Lagrima",
        price: 200
    }
]


/*
    request: http.IncomingMessage
    response: http.ServerResponse
*/

// res.write - escribir en el body del mensaje de respuesta

const server = http.createServer(function (req, res) {
    res.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Aplicaciones Hibridas</title></head><body>')

    res.write('<h1>Mi espectacular pagina web!</h1>')

    if (req.url === '/') {
        res.write('<p>Brian Lara</p>')
    }
    else if (req.url === '/materia') {
        res.write('<p>Aplicaciones Hibridas</p>')
    }
    else if (req.url === '/profesor') {
        res.write('<p>Lic. Brian Lara</p>')
    }
    else if (req.url === '/productos') {
        res.write('<ul>')

        for (let i = 0; i < PRODUCTOS.length; i++) {
            res.write('<li>' + PRODUCTOS[i].name + '</li>')
        }

        res.write('</ul>')


    }
    else {
        res.write('<p>404</p>')
    }

    res.write('</body></html>')

    res.end()
})


server.listen(2022)
