import { useState, useEffect } from "react"
import ProductList from "../../ProductList"
import productsService from "../../services/products.service"



function ProductListPage(){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        productsService.getAll().then(products=>{
            setProducts(products)
        })
    }, [])
    
    return <ProductList list={products} />
}

export default ProductListPage