import { useState, useEffect } from "react"
import ProductList from "../../ProductList"



function ProductListPage(){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:2023/api/products')
        .then(response => response.json())
        .then(data=>{
            setProducts(data)
        })
    }, [])
    
    return <ProductList list={products} />
}

export default ProductListPage