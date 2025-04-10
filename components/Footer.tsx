
import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { BackgroundBeams } from './ui/BackgroundAbout';
import Link from 'next/link';

function Footer() {
  return (
    <div id='contact' className='py-20'>
   <BackgroundBeams className='relative bg-black-200'>

      <div className="w-full-20 py-10 pb-10 bg-black-100 p-10 lg:p-20" id="contact ">
        <div className="w-full absolute left-0">
          {/* <img src='/footer-grid.svg' alt='grid' className='w-full opacity-50 -bottom-1'/> */}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw] w-full">
            Looking for a Developer? <span className='text-purple'> Let’s Connect!</span>
          </h1>
          <p className="text-gray-100 md:mt-10  lg:my-3 text-center text-md lg:text-xl p-3">
            Actively seeking a software developer role where I can apply my skills and grow with a dynamic team. Let’s connect and discuss opportunities!
          </p>
          <div className=''>
          <Link href="mailto:@akashsingh200056.com">
            <MagicButton title="Contact Me" icon={<FaLocationArrow />} position="right" />
          </Link>
          </div>
          
        </div>
       
      </div>
      </BackgroundBeams>
      </div>
  );
}

export default Footer;
 
