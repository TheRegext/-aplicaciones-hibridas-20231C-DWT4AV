
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

    html += '<a href="/">Inicio</a> | <a href="/products">Productos</a> | <a href="/products/nuevo">Nuevo producto</a>'

    html += '<h1>Mi espectacular pagina web!</h1>'

    html += content

    html += '</body></html>'

    return html
}

function createNewProductPage() {
    let html = `<h1>Crear nuevo producto</h1>`
    html += `<form action="/products/nuevo" method="POST" enctype="application/x-www-form-urlencoded">
        <label for="name">Nombre</label>    
        <input type="text" name="name" id="name">

        <label for="price">Precio</label>
        <input type="number" name="price" id="price">

        <label for="description">Descripción</label>
        <textarea name="description" id="description" cols="30" rows="10"></textarea>

        <input type="submit" value="Crear">
    </form>`

    return createPage('Crear nuevo producto', html)
}


export {
    createProductListPage,
    createProductPage,
    createPage,
    createNewProductPage
}