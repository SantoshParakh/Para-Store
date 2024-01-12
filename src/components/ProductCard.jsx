// ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, addToCart }) => {

  
  return (
    <div className='flex flex-col justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='w-full'>
    
        <img className='w-full h-full object-cover cursor-pointer' src={product.thumbnail} alt={product.title} />
      </div>
      <div className='w-full p-4 text-center'>
        <p className='text-xl font-semibold mb-2'>{product.title}</p>
        <p>{product.description}</p>
        <p>{` Price: ${product.price} Rs`}</p>
        <p>{` Rating: ${product.rating}`}</p>
        <p>{` Brand: ${product.brand}`}</p>
        <p>{` Category: ${product.category}`}</p>
        <p>{` In-Stock: ${product.stock}`}</p>

        <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded' onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
