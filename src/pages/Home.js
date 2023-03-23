import React, {useContext} from 'react';
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product"
import Hero from "../components/Hero"

// import { CartContext } from '../contexts/CartContext';


const Home = () => {

  const {products,} = useContext(ProductContext);
  
  return <div>
      <Hero/>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto md:max-w-none md:mx-0 max-w-sm'>
          {products.map(product => {
            return (<Product product={product} key={product.id}/>);
          })}
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
