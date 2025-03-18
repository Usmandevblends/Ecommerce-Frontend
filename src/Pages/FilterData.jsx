import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';

const FilterData = () => {
    const productState = useSelector(state => state.product);
    const filterProducts = useMemo(() => productState?.filteredData || [], [productState]);
    console.log(filterProducts, 'filterProducts');
    console.log(productState, 'productState');

    return (
        <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
            <h2 className='text-3xl font-bold text-center mb-8'>Filtered Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                {filterProducts.length === 0 ? (
                    <p>No products found</p>
                ) : (
                    filterProducts.map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))
                )}
            </div>
        </div>
    );
};

export default FilterData;