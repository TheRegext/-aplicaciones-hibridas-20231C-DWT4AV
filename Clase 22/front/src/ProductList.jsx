import PropTypes from 'prop-types'
import ProductListItem from "./ProductListItem"
import { useEffect, useState } from 'react'

import './ProductList.css'

function ProductList({list}){
    // const [filter, setFilter ] = useState('')
    const [products, setProducts] = useState(list)

    const onChangeFilter = (event)=>{
        const filter = event.target.value.toLowerCase()
        const productsFilter = list.filter(product => product.name.toLowerCase().includes(filter))
        setProducts( productsFilter)
        // setFilter( event.target.value ) // se vuelva a renderizar el componente
    }

    useEffect(()=>{
        setProducts(list)
    }, [list])

    return (
        <div className='product-list'>
            <form className='product-list__form'>
                Filtro: <input id="filtro" className='product-list__filter' type='text' onChange={onChangeFilter} />
            </form>
            <ul className='product-list__list'>
                {products.map(product => <ProductListItem key={product._id} product={product} />)}
            </ul>
        </div>
    )
}

ProductList.propTypes = {
    list: PropTypes.array.isRequired
}

export default ProductList