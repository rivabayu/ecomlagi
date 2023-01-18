import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.png'

const Header = () => {
  const [ isActive, setIsActive] = useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext)
  useEffect(()=> {
    window.addEventListener('scroll', () =>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md':'bg-none py-5'} fixed transition-all z-10 w-full`}>
      <div className='container mx-auto flex items-center justify-between h-full'>  
        <Link to={'/'}>
          <div className='flex items-center justify-center gap-2 text-xl font-semibold underline'>
            <img className='w-[40px]' src={Logo} alt="" />ID Ngawul
          </div>
        </Link>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
          <BsBag className='text-3xl'/>
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
