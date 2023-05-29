import ProductList from './ProductList'
import 'minireset.css'
import "./App.css"
import { useEffect, useState } from 'react'
/**
 * PascalCase - Componentes - Clases
 * camelCase - Variables - funciones
 * snake_case - Variables - funciones
 * kebab-case - clases en css y etiquetas html
 */


function App(){
    const [products, setProducts] = useState([])

    /// Ejecuta la funcion cuando se monta el componente 
    useEffect(()=>{
        fetch('http://localhost:2023/api/products')
        .then(response => response.json())
        .then(data=>{
            setProducts(data)
        })
    }, [])

    return (
        <div>
            <h1>Productos</h1>
            <p>El mejor cafe a un click</p>
            <ProductList list={products} />
        </div>
    )
}

export default App