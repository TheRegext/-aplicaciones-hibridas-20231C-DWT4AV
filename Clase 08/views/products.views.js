
function createProductListPage(products) {
    let html = '<h1>Lista de productos</h1>'
    html += '<ul>'

    for (let i = 0; i < products.length; i++) {
        html += `<li>${products[i].name} <a href="/products/${products[i].id}">Ver</a></li>`
    }

    html += '</ul>'

    return createPage('Lista de productos', html)
}

function createProductPage(product) {
    let html = `<h1>${product.name}</h1>`
    html += `<p>Precio: ${product.price}</p>`
    html += `<p>${product.description}</p>`

    return createPage(product.name, html)
}

function createPage(title, content) {
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'

    html += '<title>' + title + '</title></head><body>'

    html += '<h1>Mi espectacular pagina web!</h1>'

    html += content

    html += '</body></html>'

    return html
}


export {
    createProductListPage,
    createProductPage,
    createPage
}