import API from './api.service'

async function getAll() {
    return API.call({ uri: 'products' })
}

async function getById(idProduct) {
    return API.call({ uri: `products/${idProduct}` })
}


export {
    getAll,
    getById
}

export default {
    getAll,
    getById
}
