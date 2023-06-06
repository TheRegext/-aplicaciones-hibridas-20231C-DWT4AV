import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import productsService from "../../services/products.service"

function ProductDetailsPage(){
    const [product, setProduct] = useState({})
    const {idProduct} = useParams()

    useEffect(()=>{
        productsService.getById(idProduct)
        .then(product=>{
            setProduct(product) // forzar el render
        })
    }, [idProduct])

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetailsPage