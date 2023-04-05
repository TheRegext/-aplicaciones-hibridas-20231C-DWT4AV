// res.write - escribir en el body del mensaje de respuesta
function createPage(title, content) {
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'

    html += '<title>' + title + '</title></head><body>'

    html += '<h1>Mi espectacular pagina web!</h1>'

    html += content

    html += '</body></html>'

    return html
}

function createrProductList(products) {
    let html = '<ul>'

    for (let i = 0; i < products.length; i++) {
        html += '<li>' + products[i].name + '</li>'
    }

    html += '</ul>'

    return html
}

/*
module.exports = {
    createPage,
    createrProductList
}
*/

export {
    createPage,
    createrProductList
}

export default {
    createPage,
    createrProductList
}