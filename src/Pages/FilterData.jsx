import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'

const FilterData = () => {
    const filterProducts = useSelector(state => state.product.filteredData)
    return (
        <div className=' mx-auto py-12 px-4 md:px-16 lg:px-24 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                {filterProducts.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        </div>
    )
}

export default FilterData