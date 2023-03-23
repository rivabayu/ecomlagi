import React from 'react';
import WomanImg from '../img/heroBg.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/*  */}
          <div className='font-semibold flex items-center'>
            <div className='flex w-10 h-[2px] bg-blue-500 mr-3'>
            </div>BEST BRAND
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>AUTUMN SALE <br/>
            <span className='font-semibold'>BEST CLOTES</span>
          </h1>
          <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-primary">
            Discover More
          </Link>
        </div>
        {/* img */}
        <div className='hidden lg:block'>
          <img src={WomanImg} alt=' '/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
