import React, { useEffect, useState } from 'react';
import { Product_url } from '../constants/constants';
import ProductCard from './ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(Product_url);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error while fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
       <div className='flex items-center space-x-4 mb-4'>
        
         <input
          className='p-2 text-black '
          type='text'
          placeholder='Search for products'
          value={searchQuery}
          onChange={handleSearch}
        /> 
      </div> 

      {filteredProducts.map((product) => (
        <div key={product.id} className='flex flex-col justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='w-full' onClick={() => showProductDetails(product)}>
            <img className='w-full h-full object-cover cursor-pointer' src={product.thumbnail} alt={product.title} />
          </div>
          <div className='w-full p-4 text-center'>
            <p className='text-xl font-semibold mb-2'>{product.title}</p>
            <p>{product.description}</p>
            {/* <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded' onClick={() => addToCart(product)}>
              Add to Cart
            </button> */}
          </div>
        </div>
      ))}

      {selectedProduct && (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center'>
          <ProductCard product={selectedProduct} addToCart={addToCart} />
          <button className=' absolute top-20 right-30 h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-500 rounded-full focus:shadow-outline hover:bg-indigo-800 ' onClick={closeProductDetails}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
