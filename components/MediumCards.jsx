import React from 'react';
import Image from 'next/image';

const MediumCards = ({ img, title }) => {
  return (
    <div className=' my-2 cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
      <div className='relative w-80 h-80 md:h-60 md:w-60'>
        <Image
          src={img}
          fill
          className='rounded-xl w-full h-auto'
          alt='image'
        />
      </div>
      <h3 className='flex text-2xl mt-3'>{title}</h3>
    </div>
  );
};

export default MediumCards;
