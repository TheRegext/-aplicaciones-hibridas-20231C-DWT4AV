
// url amigables
// /products/5/edit
// /alumnos/5/edit

function createProductListPage(products) {
    let html = '<h1>Lista de productos</h1>'
    html += '<ul>'

    for (let i = 0; i < products.length; i++) {
        html += `<li>${products[i].name} <a href="/products/${products[i]._id}">Ver</a> <a href="/products/${products[i]._id}/edit">Modifcar</a> <a href="/products/${products[i]._id}/delete">Eliminar</a> </li>`
    }

    html += '</ul>'

    return createPage('Lista de productos', html)
}

function createProductPage(product, reviews) {
    let html = `<h1>${product.name}</h1>`
    html += `<p>Precio: ${product.price}</p>`
    html += `<p>${product.description}</p>`

    html += `<h2>Comentarios</h2>`
    html += `<ul>`

    for (let i = 0; i < reviews.length; i++) {
        html += `<li>
            Autor: ${reviews[i].author} <br />
            Valoracion: ${reviews[i].score} <br />
            Comentario: ${reviews[i].comment} <br />
        </li>`
    }

    html += `</ul>`




    return createPage(product.name, html)
}





function createPage(title, content) {
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'

    html += '<link rel="stylesheet" href="/css/styles.css">'

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
        <label for="name">Nombre: 
            <input type="text" name="name" id="name">
        </label>

        <label for="price">Precio: 
            <input type="number" name="price" id="price">
        </label>

        <label for="description">Descripción:
            <input name="description" id="description"></input>
        </label>

        <input type="submit" value="Crear">
    </form>`

    return createPage('Crear nuevo producto', html)
}



function formEditProduct(product) {
    let html = `<h1>Modificar producto #${product.id}</h1>`

    html += `<form action="/products/${product._id}/edit" method="POST" enctype="application/x-www-form-urlencoded">
        <label for="name">Nombre: 
            <input type="text" name="name" id="name" value="${product.name}">
        </label>

        <label for="price">Precio: 
            <input type="number" name="price" id="price" value="${product.price}">
        </label>

        <label for="description">Descripción:
            <input name="description" id="description" value="${product.description}" />
        </label>

        <button type="submit">Modificar</button>
    </form>`

    return createPage('Modificar Producto', html)
}

function formDeleteProduct(product) {
    let html = `<h1>Eliminar producto #${product._id}</h1>`

    html += `<h1>${product.name}</h1>`
    html += `<p>Precio: ${product.price}</p>`
    html += `<p>${product.description}</p>`

    html += `<form action="/products/${product._id}/delete" method="POST" enctype="application/x-www-form-urlencoded">
        <p>¿Estás seguro de que quieres eliminar el producto ${product.name}?</p>
        <button type="submit">Eliminar</button>
    </form>`

    return createPage('Eliminar Producto', html)
}

export {
    createProductListPage,
    createProductPage,
    createPage,
    createNewProductPage,
    formEditProduct,
    formDeleteProduct,
}