import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {BsPlus, BsEyeFill} from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';

const Product = ({product}) => {
  console.log(product)
  const {addToCart} = useContext(CartContext)
  
  const{id, category, title, price} = product;
  return (<div>
    <div className='border border-red-3000 h-[300px] mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-full mx-auto flex justify-center items-center'>
          <img className=' group-hover:scale-110 transision duration-300' src={product.images[0]} alt="" />  
        </div> 
      </div>
      <div className='absolute top-0 -right-11 group-hover:right-1  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <button onClick={() => addToCart(product, id)}>
          <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
            <BsPlus className='text-3xl'/>
          </div>
        </button>
        <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center text-primary drop-shadow-xl items-center">
          <BsEyeFill/>
        </Link>
      </div>
    </div>
    <div>
    <div className='text-sm capitalize text-gray-500'>{category}</div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
        <div className='font-bold'>$ {price}</div>
      </Link>
      
      
    </div>
  </div>);
};

export default Product;
