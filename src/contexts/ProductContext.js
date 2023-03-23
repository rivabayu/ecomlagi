import React, {createContext, useState, useEffect} from 'react';


// create context
export const ProductContext = createContext();
  const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    useEffect (() => {
      const fetchProducts = async () => {
        const response = await fetch('https://dummyjson.com/products/?limit=20&skip=40');
        const data = await response.json();
        setProducts(data.products);
      };
      fetchProducts();
    }, []);

    return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
  }

// const ProductProvider = ({childern}) => {
//   const [products, setProducts] = useState([]);
//   useEffect(()=>{
//     const fetchProducts = async () => {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const data = await response.json();
//       setProducts(data);
//     };
//     fetchProducts();
//   },[]);
//   return <ProductContext.Provider value={{products}}>{childern}</ProductContext.Provider>;
// };

export default ProductProvider;
