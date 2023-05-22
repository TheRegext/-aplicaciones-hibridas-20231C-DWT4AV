import ProductListItem from "./ProductListItem"
import 'minireset.css'
import "./App.css"
/**
 * PascalCase - Componentes - Clases
 * camelCase - Variables - funciones
 * snake_case - Variables - funciones
 * kebab-case - clases en css y etiquetas html
 */
const PRODUCTS = [
    {
        id: 1,
        name: "Cafe Expreso 2",
        price: 200
    },
    {
        id: 2,
        name: "Cafe Americano",
        price: 280
    },
    {
        id: 3,
        name: "Cafe con Leche",
        price: 400
    },
    {
        id: 4,
        name: "Cafe Moca",
        price: 450
    }
]

function App(){
    return (
        <div>
            <h1>Productos</h1>
            <p>El mejor cafe a un click</p>
            <ul>
                {PRODUCTS.map(product => <ProductListItem key={product.id} product={product} />)}
            </ul>
        </div>
    )
}

export default App