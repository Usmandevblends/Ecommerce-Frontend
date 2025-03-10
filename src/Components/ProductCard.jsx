import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addTocart } from '../Redux/CartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addTocart(product));
    alert('Product added successfully !')
  };

  return (
    <div className='bg-white p-4 shadow relative border transform transition-transform duration-300 hover:scale-105'>
      <img src={product.image} className='w-full h-48 object-contain mb-4' alt={product.title} />
      <h3 className='text-lg font-semibold'>{product.title}</h3>
      <p className='text-gray-500'>${product.price}</p>
      <div className='flex items-center mt-2'>
        <FaStar className='text-yellow-500' />
        <FaStar className='text-yellow-500' />
        <FaStar className='text-yellow-500' />
        <FaStar className='text-yellow-500' />
      </div>
      <div
        className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-100'
        onClick={(e) => handleAddToCart(e, product)}
      >
        <span className='group-hover:hidden'>+</span>
        <span className='hidden group-hover:block'>Add to cart</span>
      </div>
    </div>
  );
};

export default ProductCard;