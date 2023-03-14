const http = require('node:http') // protocolo

//  functionalidad del servidor
/**
 * reques = peticion del cliente
 * response = respuesta del servidor al cliente
 * 
 */
const server = http.createServer(function (reques, response) {
    console.log('peticion recibida')
    console.log("Peticion del cliente: ", reques.url)

    if (reques.url === '/') {
        response.write('Hola mundo')
    }
    else if (reques.url === '/pepe') {
        response.write('Hola pepe')
    }
    else {
        response.write('No se encuentra la pagina')
    }
    response.end()
})


//  puerto de escucha
server.listen(2023)