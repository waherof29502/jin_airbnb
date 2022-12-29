import { GlobeAltIcon } from '@heroicons/react/outline';
import React from 'react';

function Footer() {
  return (
    <footer className='flex flex-col space-y-10 px-32 '>
      <div className='flex flex-1 justify-around items-center '>
        <div className='space-y-4 text-xs text-gray-800'>
          <p className='font-bold text-lg '>Hosting</p>
          <p className='mt-2'> Try hosting</p>
          <p>AirCover for Hosts</p>
          <p>hosting resources</p>
          <p>community forum</p>
          <p>How to host responsibly</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
          <p className='font-bold text-lg '>Hosting</p>
          <p className='mt-2'> Try hosting</p>
          <p>AirCover for Hosts</p>
          <p>hosting resources</p>
          <p>community forum</p>
          <p>How to host responsibly</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
          <p className='font-bold text-lg '>Hosting</p>
          <p className='mt-2'> Try hosting</p>
          <p>AirCover for Hosts</p>
          <p>hosting resources</p>
          <p>community forum</p>
          <p>How to host responsibly</p>
        </div>
      </div>

      <div className='flex-col'>
        <div className='mx-auto mt-4 flex w-full items-center justify-center space-x-2 text-xs'>
          <GlobeAltIcon className='-mr-2 h-5 w-5' />
          <p>English (EN)</p>
          <div className='flex items-center'>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Company Details</span>
          </div>
        </div>
        <p className='text-center text-sm'>© 2022 JinWangDev</p>
      </div>
    </footer>
  );
}

export default Footer;
