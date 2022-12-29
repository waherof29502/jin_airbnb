import React from 'react';
import Image from 'next/image';

const SmallCards = ({ img, location, distance }) => {
  return (
    <div className='flex mt-2 cursor-pointer items-center space-x-4 rounded-xl transition ease-in-out hover:scale-105 hover:bg-gray-100 hover:bg-opacity-90 xs:m-2'>
      <div className='relative h-16 w-16'>
        <Image
          src={img}
          width={100}
          height={100}
          className='rounded-lg'
          alt='smallcard'
        />
      </div>
      <div className='text-sm font-semibold sm:text-base'>
        <h2>{location}</h2>
        <h3 className='text-gray-400'>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCards;
